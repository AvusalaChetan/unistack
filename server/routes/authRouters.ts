import express from "express";
import { signup, signin, logout } from "../controllers/authController";

const router = express.Router();

router.post('/signup', signup);

router.post('/login', signin);

router.get('/logout', logout);


export default router;