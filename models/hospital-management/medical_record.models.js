import mongoose from "mongoose";  

const medcialRecordSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    
},{timestamps:true})

export const MedicalRecord=mongoose.model("MedicalRecord",medcialRecordSchema)