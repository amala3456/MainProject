const express = require('express');
const adminlogRoutes = express.Router();

const adminlogSchema = require('../Model/Adminlog');
adminlogRoutes.use(express.json());


// dummy username and password
const Username = 'admin';
const Password = 'admin@123';

// Login route
adminlogRoutes.post('/adminlog', async (req, res) => {
    let Username = req.body.username;
    let Password = req.body.password;
    try {
        let username = req.body.username;
        let password = req.body.password;
        if (username !== Username || password !== Password) {
            res.status(401).json({ message: "Incorrect username or password" });
            return;
        }
        
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = adminlogRoutes;