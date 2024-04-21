const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_URL)
.then(()=>{
    console.log('Db connected successfully...');
})

.catch(()=>{
    console.log('Db connection failed!!!');
})