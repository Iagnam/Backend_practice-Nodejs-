const express=require('express');
const mongoose= require('mongoose');
const StudentRoute=require("./Routes/StudentRoutes");
 const app=express();
 app.use(express.json());
 app.use("/api",StudentRoute);
 mongoose.connect("mongodb://127.0.0.1:27017/College")
   .then(()=>
        console.log("mongodb connected")
   )
   .catch((err)=>
         console.log(err)
);
app.listen(3000,()=> console.log("Server is running"));

