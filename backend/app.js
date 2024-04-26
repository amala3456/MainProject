const express = require('express');
const morgan = require('morgan');
const cors=require('cors')
require('dotenv').config();
const app = new express();
const PORT = process.env.PORT ;
app.use(morgan('dev'));

//Author Jincy
const studentlogRouter = require('./Routes/studentlogRoutes');
const studentlogDb = require('./Db/studentlogDb');
app.use(cors());

//Author Amala
const sdashDb=require('./Db/sdashDb');
const sdashRouter=require('./Routes/sdashRoutes');


app.use('/api',sdashRouter)

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})