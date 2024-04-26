const express = require('express');
const studentlogRouter = express.Router();
const studentlogSchema = require('../Model/studentSchema');

studentlogRouter.use(express.json());


// dummy email and password
const Email = 'johndoe@gmail.com';
const Password = 'John@123';

// Login route
studentlogRouter.post('/studentlog', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        if (email !== Email || password !== Password) {
            res.status(401).json({ message: "Incorrect email or password" });
            return;
        }
        
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = studentlogRouter;
