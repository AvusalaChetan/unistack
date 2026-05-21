import express from "express";
import {
  instituteRegister
} from "../controllers/instituteController";
import { upload } from "../middleware/multer";
import { instituteValidator, validateInstituteRequest } from "../utils/validator";

const router = express.Router();

router.post(
  "/register-institute",
  upload.single("institute_logo"),
  instituteValidator,
  validateInstituteRequest,
  instituteRegister,
);


export default router;
