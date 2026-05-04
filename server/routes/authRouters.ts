import express from "express";
import { signup, signin, logout } from "../controllers/authController";
import {validateSignupRequest} from '../utils/validator'

const router = express.Router();

router.post('/signup', validateSignupRequest,signup);

router.post('/login', signin);

router.get('/logout', logout);


export default router;