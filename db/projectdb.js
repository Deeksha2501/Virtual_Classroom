 var mongoose = require("mongoose");
 require('dotenv').config();

 var conn = mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@database-5ivou.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true  , useUnifiedTopology: true} , (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });

 require("./schema");
    
 
 //mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/db",{useMongoClient: true});
 
 
 

