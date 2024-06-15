const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    gender:{type:String,enum:['male','female']},
    number:{type:Number,required:true},
    class:{type:Number,required:true}
}
)

const students=mongoose.model("Students",studentSchema);

module.exports=students;