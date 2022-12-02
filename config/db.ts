import mongoose from "mongoose";

const URI:string ="mongodb://localhost/schoolDB"

mongoose.connect(URI)
mongoose.connection.on("open", ()=>{
console.log("Database connected")
})

.once("error",()=>{
    console.log("failed to connect to database")
})