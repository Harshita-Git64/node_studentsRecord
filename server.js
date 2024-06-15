const mongoose=require("mongoose")
const express=require("express")
const students=require("./models/students")
const db=require("./db")

const app=express();
const bodyParser=require("body-parser")
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("This is Home Page")
})


// app.get("/data",async(req,res)=>{
//    try{
//    const data= await students.find({})
//    res.status(200).json(data)
// }
// catch(err){
//    console.log(err)
// }
// })

// app.get("/:gender",async(req,res)=>{
//    try{
//       const gender=req.params.gender;
//       if(gender==='male' || gender==='female')
//          {
//             const data= await students.find({gender:gender})
//             res.status(200).json(data)
//          }
//          else{
//             res.status(404).json({msg:"invalid gender request!!"})
//          }
// }
// catch(err){
//    res.status(500).json({msg:err})
// }
// })

// app.post("/info",async(req,res)=>{
//    try{
//     const data=req.body;
//     const studentInfo=new students(data)
//     const response=await studentInfo.save()
//     res.status(200).json(response)
//    }
//    catch(err){
// console.log("unable to post the data",err)
//    }
// })
const studentsRoutes=require("./routes/studentsRoutes")
app.use("/students",studentsRoutes)


app.listen(3000,()=>{console.log("Connected")})

