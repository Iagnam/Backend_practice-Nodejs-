const Student=require("../Models/Student");
const createStudent= async(req,res)=>{
    try{
        const studentdata=req.body;
        const student=await Student.create(studentdata);
        res.status(201).json({
                     message:"Student created Successfully",
                     data:student
        })
    }


  catch(err){
           res.status(404).json({
              err:error.message
           })
  }
}
const getStudent= async(req,res)=>{
  try{
    const students=await Student.find();
    res.status(200).json({
      message:"got the data",
      data:students
    })
  }
  catch(err){
     res.status(500).json({
              err:error.message
           })
  }
}

const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const delStud=await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Student deleted" ,
                    data:delStud
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



module.exports={createStudent,getStudent,deleteStudent,updateStudent};