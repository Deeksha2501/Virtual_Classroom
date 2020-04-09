var mongoose = require("mongoose");

var assignmentSchema = new mongoose.Schema({
   a_name: String,
   a_details: String,
   assigned_ondata: Date,
   due_date: Date,
   f_id: String
});

var homeworkSchema = new mongoose.Schema({
   h_name: String,
   fc_id: String,
   st_id: String,
});

var studentSchema = new mongoose.Schema({
   st_name: String,
   st_id: String
});

var facultySchema = new mongoose.Schema({
   fc_name: String,
   fc_id: String
});

var classSchema = new mongoose.Schema({
   class_name: String,
   fc_name: String,
   fc_id: String,
   st_id: [{
      st_id : String
   }],
   assignments: [{
      title: String,
      a_details: String,
      a_filename : String,
      homework : [{
         st_name : String,
         st_id : String,
         hw_details : String,
         checked : Number,
         marks : Number,
         h_filename :String,
      }]
   }],
   students: [{
      st_name: String,
      st_id: String
   }],
   discussion: [{
      sender_id : String,
      sender_name : String,
      msg: String,
      date: {
         type:Date,
         default:Date.now
      }
   }],
   joining_id: String,
});

var Homework = mongoose.model("Homework", homeworkSchema);
var Assignment = mongoose.model("Assignment", assignmentSchema);
var Student = mongoose.model("Student", studentSchema);
var Faculty = mongoose.model("Faculty", facultySchema);
var Class = mongoose.model("Class", classSchema);