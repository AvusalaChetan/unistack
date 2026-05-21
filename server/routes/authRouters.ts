import express from "express";
import { login, logout, signup } from "../controllers/authController";
import { loginValidator, signupValidator, validateLoginRequest, validateSignupRequest } from '../utils/validator';

const router = express.Router();

router.post('/signup', signupValidator,validateSignupRequest,signup);

router.post('/login', loginValidator, validateLoginRequest, login);

router.get('/logout', logout);


export default router;