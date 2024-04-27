const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors =require('cors')

const studentlogRouter = require('./Routes/studentlogRoutes');
const studentlogDb = require('./Db/studentlogDb');
const adminlogRouter = require('./Routes/adminlogRoutes');
const adminlogDb = require('./Db/adminlogDb');

const app = new express();
const PORT = process.env.PORT ;
app.use(morgan('dev'));
app.use(cors())
app.use('/api',adminlogRouter)
app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})