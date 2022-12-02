import express,{Application, Request, Response} from "express"

const  app: Application = express()
app.use (express.json());

require("./config/db")
const Port = 1999; 
import students from "./router/studentroute"



app.get("/", (req:Request, res:Response):Response =>{
    return res.status(200).json({
message:"Server is up 😎😍😍🤩"
    })
})

app.use("/api",students)
app.listen(Port, ()=>{
console.log("Sever is listening")
})