import express from "express";
import { instituteRegister } from "../controllers/instituteController";
import { upload } from "../middleware/multer";
import { validateInstituteRequest } from "../utils/validator";

const router = express.Router();

router.post('/register-institute', upload.single('institute_logo'), validateInstituteRequest, instituteRegister)


export default router