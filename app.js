require("./db/projectdb");
require("./models/User");
require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var mongoose = require("mongoose");
var assign = mongoose.model("Assignment");
var student = mongoose.model("Student");
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const dclass = mongoose.model("Class");
const user = mongoose.model("User");

const { ensureAuthenticated, forwardAuthenticated } = require("./config/auth");

const app = express();

app.use(express.static("public"));

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys');

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const assignment = require("./assignment/app.js");
const homework = require("./homework/app.js");
app.use("/assignment",  ensureAuthenticated ,assignment);
app.use("/homework",ensureAuthenticated , homework);

app.get("/discussion/:cid/:id/", async (req, res) => {
  const cid = req.params.cid;
  try {
    const data = await dclass.findById(cid);
    res.render("post_something", { cid: cid, id: req.params.id });
  }
  catch (e) {
    console.log(e);
  }
});

app.post("/discussion/:cid/:id/", async (req, res)=>{
  try {
    var cid = req.params.cid;
    var id = req.params.id;
    const data = await user.findById(id);
    //console.log(data.name);
    const cdata = await dclass.findOneAndUpdate({ "_id": cid },
      {
        $push:
        {
          "discussion": [{
            "sender_id" : data._id,
            "sender_name" : data.name,
            "msg": req.body.msg,
          }]
        },
        $currentDate : 
        {
          "discussions" : [{
            date : true,
          }]
        }
      });
      console.log(cdata);
      if(id === cdata.fc_id){
        const url = "/assignment/" + cid + "/" + id + "/";
        res.redirect(url);
      }
      else{
        const url = "/homework/" + cid + "/" + id + "/";
        res.redirect(url);
      }
  }
  catch (e) {
    console.log(e);
  }
});



const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
