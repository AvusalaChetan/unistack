import express from "express";

const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('User signed up successfully');
});

router.post('/login', (req, res) => {
    res.send('User logged in successfully');
});

router.get('/logout', (req, res) => {
    res.send('User logged out successfully');
});


export default router;