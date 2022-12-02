import mongoose  from "mongoose";

interface iClass {
    name:string
    admissionNo:number
    session:number
    Class:string
}

interface puipls extends iClass, mongoose.Document{}


const classSchema = new mongoose.Schema({
    name:String,
    admissionNo:Number,
    session:Number,
    Class:String

},{timestamps:true})

export default mongoose.model<puipls>("StudentsData",classSchema )