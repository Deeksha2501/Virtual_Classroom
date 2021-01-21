var express = require("express");
// const favicon = require('express-favicon');
// var favicon = require('serve-favicon');

var app = express.Router();
var mongoose = require("mongoose");
var faculty = mongoose.model("Faculty");
var student = mongoose.model("Student");
var dclass = mongoose.model("Class");
var assign = mongoose.model("Assignment");
var user = mongoose.model("User");
var bp = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
require("express-ejs-layouts");
require("express-layouts");

// app.use(favicon(__dirname + '/public/icon.png'));
// app.use(favicon(__dirname + '../public/icon.png'));
require('dotenv').config();
var app = express.Router();

app.use(bp.json());
app.use(methodOverride("_method"));

app.use(bp.urlencoded({ extended: false }));
app.use(express.static("public"));


const mongoURI = "mongodb+srv://deeksha325:2515@database-5ivou.mongodb.net/test?retryWrites=true&w=majority";
console.log(mongoURI);
const conn = mongoose.createConnection( process.env.MONGODB_URI || mongoURI , { useNewUrlParser: true, useUnifiedTopology: true });

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

app.get("/create/:cid/", async (req, res) => {
    try{
       res.render("./faculty/faculty_assign_create", { cid: req.params.cid });
    }
    catch(e){
        console.log("Error" , e);
    }
});

app.post("/assign-create/:id/", upload.single("file"), async (req, res) => {
    var filename = req.file.filename
   const id = req.params.id;
    try {
        await dclass.findOneAndUpdate({ "_id": id },
            {
                $push:
                {
                    "assignments": [{
                        "title": req.body.a_name,
                        "a_details" : req.body.a_details,
                        "a_filename" : filename,
                    }]
                }
            });
    }
    catch (e) {
        console.log("Error", e);
    }
    const url = "/assignment/assign-show/" + id + "/";
    res.redirect(url);
});

app.post("/assign-delete/:id/:cid/", async (req, res) => {
    try {
        var id = req.params.id;
        var cid = req.params.cid;
        console.log("id" , id);
        console.log("cid" , cid);
        const data = await dclass.findOneAndUpdate({ "_id": cid },
            {
                $pull:
                    { "assignments": { "_id": id } }
            });

        console.log("uuuuu" , data);
    }
    catch (e) {
        console.log("Error", e);
    }
    const url = "/assignment/assign-show/" + cid + "/";
    res.redirect(url);
});

app.get("/assign-show/:cid/", async (req, res) => {
    try {
        var cid = req.params.cid;
        const data = await dclass.findById(cid);
        const ad = await data.assignments;
        const id = await data.fc_id;
        
        console.log(ad);
        res.render("./faculty/faculty_classwork.ejs", { data: ad, id: id  , cid : cid});
    }
    catch (e) {
        console.log("Error", e);
    }
});

app.get("/images/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (!file || file.length === 0) {
          return res.status(404).json({
              err: "No file found"
          })
      }
      //if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
          const readstream = gfs.createReadStream(file.filename);
          readstream.pipe(res);
      //}
  });
});

app.get("/create-class/:id/", async (req, res) => {
    try{
        var id =   req.params.id;
        var data = await user.findById(id);
        var name = data.name;
        res.render("./faculty/class_creation" , {id : id , name : name});
    }
    catch(e){
        console.log("Error", e);
    }
});

app.post("/create-class/:id/", async (req, res) => {
    console.log("post");
    try {
        const data = await user.find({ _id: req.params.id })
        const g = await faculty.create({
            fc_name: data[0].name,
            fc_id: data[0]._id,
        });
        const ifFound = await dclass.find({ joining_id: req.body.joining_id });
        if (ifFound != '') {
            res.render("./faculty/class_creation", { id: req.params.id  ,name : data[0].name });
        }
        else {
            const c = await dclass.create({
                class_name: req.body.class_name,
                joining_id: req.body.joining_id,
                fc_name: g.fc_name,
                fc_id: g.fc_id,
            });
            const url = "/assignment/" + c._id + "/" + req.params.id + "/";
            res.redirect(url);
        }
    }
    catch (e) {
        console.log("Error", e);
    }
});

app.get("/show-students/:cid/", async (req, res) => {
    try {
        var cid = req.params.cid;
        const data = await dclass.findById(cid);
        var id = data.fc_id;
        var name = data.fc_name;
        res.render("./faculty/faculty_students", { data: data.students, cid: cid , id : id  , fc_name : name});
    }
    catch (e) {
       console.log("Error" , e);
    }
    //res.render("./faculty/faculty_students.ejs");
});

app.get("/show-classes/:id/", async (req, res) => {
    try{
    var id = req.params.id;
    const f_classes = await dclass.find({ "fc_id": req.params.id });
    const s_classes = await dclass.find({ st_id:
        {
            $elemMatch:
            {
                st_id: req.params.id
            }
        }});
        console.log("yha tak to");
        //res.send("vuk");
    res.render("./faculty/classes.ejs" , {  s_classes : s_classes  , f_classes: f_classes  , id :id});
    }
    catch(e){
        console.log("Error" , e);
    }
});

app.get("/student-remove/:id/:cid/:sid/", async (req, res) => {
    var id = req.params.id;
    var cid = req.params.cid;
    try {
         var data = await dclass.findById(cid);
         data = await data.st_id;
        await dclass.findOneAndUpdate({ "_id": cid },
            {
                $pull:
                    { "students": { _id: id },
                       "st_id" : {st_id : req.params.sid}
                    }
            })
    }
    catch (e) {
        console.log("Error", e);
    }
    const url = "/assignment/show-students/" + cid + "/";
    res.redirect(url);
});

app.get("/delete-msg/:cid/:id/:uid/" , async (req , res)=>{
    try{
        var id = req.params.id;
        var cid = req.params.cid;
        var uid = req.params.uid;
        await dclass.findOneAndUpdate({ "_id": cid },
            {
                $pull:
                    { "discussion": { _id: id } }
            })
    }
    catch(e){
        console.log("Error" , e);
    }
    var url = "/assignment/" + cid + "/" + uid + "/";
    res.redirect(url);
});

app.get("/Show-submitted-hw/:aid/:cid/" , async (req , res)=>{
    var aid = req.params.aid;
    var cid = req.params.cid;
    //var hid = req.params.hid;
    try{
        var data = await dclass.find({ assignments:
            {
                $elemMatch:
                {
                     _id : aid
                }
            }});
            var id = data[0].fc_id;
            var name;
        hdata = data[0].assignments;
        for(var i=0 ; i<hdata.length ; i++){
            if(hdata[i]._id == aid){
                name = hdata[i].title;
                hdata = hdata[i].homework;
                break;
            }
        }
        console.log(hdata);

        res.render("./faculty/faculty_submitted_hw" , {data : hdata , cid : cid , aid : aid , id:id , title : name});
    }
    catch(e){
     console.log("Error" , e)   
    }
});

app.post("/marking/:aid/:cid/:hid/" , async (req , res)=>{
    var aid = req.params.aid;
    var cid = req.params.cid;
    var hid = req.params.hid;
    try{
        var hw_details , filename , st_name , st_id;
        var hdata = await dclass.findById(cid);
        hdata = hdata.assignments;
        for(var i=0 ; i<hdata.length ; i++){
            if(hdata[i]._id == aid){
                hdata = hdata[i].homework;
                break;
            }
        }
        var i;
        for( i=0 ; i<hdata.length ; i++){
            if(hdata[i]._id == hid){
                hw_details = hdata[i].hw_details;
                filename = hdata[i].h_filename;
                st_name = hdata[i].st_name;
                st_id = hdata[i].st_id;
                break;
            }
        }
        var data = await dclass.updateOne(
            { "_id": cid, "assignments._id": req.params.aid},
            { "$pull": 
                {"assignments.$[].homework": 
                    {
                        "_id" : hid
                    }
                }
             }
        );
        var data = await dclass.updateOne(
            { "_id": cid, "assignments": {"$elemMatch" : {"_id" : req.params.aid}}},
            { "$push": 
                {"assignments.$.homework": 
                    {   
                        "checked" : 1,
                        "marks" : req.body.marks,
                        "st_name" : st_name,
                        "st_id": st_id,
                        "hw_details": hw_details,
                        "h_filename" : filename
                    }
                }
             }
            )
            console.log(data);
            const url = "/assignment/Show-submitted-hw/" + aid + "/" + cid + "/";
            res.redirect(url);
    }
    catch(e)
    {
        console.log("Error" , e);
    }
});

app.get("/:cid/:id/", async (req, res) => {
    try{
    var cid = req.params.cid;
    var id = req.params.id;
    var data = await dclass.findById(cid);
    var name = data.class_name;
    var jd = data.joining_id;
    var discussions = data.discussion;
    res.render("./faculty/faculty_dashboard.ejs", { 
        data : data,
        cid: cid  ,
        id : req.params.id ,
        discussions : discussions ,
        name : name,
        jd : jd
    });
}
    catch(e){
        console.log("Error" , e);
    }
});





module.exports = app;




