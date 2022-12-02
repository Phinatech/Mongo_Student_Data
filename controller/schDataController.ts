import studentmodel from "../model/studentmodel";
import {Request,Response} from "express"

const poststuData =async (req:Request,res:Response):Promise<Response> => {
    try {
        const{name,admissionNo,session,Class}= req.body;
        const newStudent = await studentmodel.create({
        name,
        admissionNo:(await studentmodel.find()).length + 100000, 
        session,
        Class
        })

        return res.status(201).json({
            message:"Student data gotten Successfully",
            data:newStudent
        })
        } catch (error) {
            return res.status(404).json({
                message:"An error occured",
                data:error
            })
    }
}


const getAllStudent =async (req:Request,res:Response):Promise<Response> => {
    try {
        const gettingStudents = await studentmodel.find();
        return res.status(200).json({
            message:"All students Data has been gotten sucessfuly",
            data:gettingStudents
        })
    } catch (error) {
      return res.status(404).json({
        message:"An error occured while geting the data",
        data:error
      })  
    }
}


const getOnestudent =async (req:Request,res:Response):Promise<Response> => {
    try {
      const getOne = await studentmodel.findById(req.params.id)  
      return res.status(201).json({
        message:"A student data has been successfully gotten",
        data:getOne
      })
    } catch (error) {
       return res.status(404).json({
        message:"An error occured while getting  a student data",
        data:error
       }) 
    }
}


const updateStudent =async (req:Request, res:Response):Promise<Response> => {
    try {
const{name,session,Class}= req.body
const updating = await studentmodel.findByIdAndUpdate(req.params.id, {
  name,
  session,
  admissionNo :(await studentmodel.find()).length + 100000,
  Class
},{new:true});

return res.status(200).json({
    message:"Data Successfully Updated",
    data:updating
})
    } catch (error) {
        return res.status(404).json({
            message:"An error occurred while updating data",
            data:error
        })
    }
}

const Deleting =async (req:Request,res:Response):Promise<Response> => {
    try {
        const removestudent = await studentmodel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message:"Student Data has been successfully deleted",
            data:removestudent
        })
    } catch (error) {
        return res.status(404).json({
            message:"An eror occured while deleting",
            data:error
        })
    }
}
export{poststuData,getAllStudent,getOnestudent, updateStudent,Deleting}