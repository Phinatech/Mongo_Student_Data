import { Router } from "express";
import {
    Deleting,
  getAllStudent,
  getOnestudent,
  poststuData,
  updateStudent,
} from "../controller/schDataController";

const router = Router()

router.route("/studentData").get(getAllStudent)
router.route("/newStudent").post(poststuData)
router.route("/onestudent/:id").get(getOnestudent)
router.route("/updatingstudent/:id").patch(updateStudent)
router.route("/deletingdata/:id").delete(Deleting)


export default router