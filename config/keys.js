var mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true  , useUnifiedTopology: true} , (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });

 require("../models/User");