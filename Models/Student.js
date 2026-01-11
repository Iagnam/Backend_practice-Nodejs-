const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
    }
});
module.exports = mongoose.model("Student",studentSchema);
