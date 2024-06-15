var mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/School")
 const db=mongoose.connection;
 db.on("connected",()=>console.log("datbase Connected"))
 db.on("disconnected",()=>console.log("datbase disconnected"))
 db.on("error",()=>console.log("error in connectiong database"))

module.exports=db;
