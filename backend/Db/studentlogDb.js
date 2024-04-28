const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_URL)
.then(()=>{
    console.log('db connected...');
})

.catch(()=>{
    console.log('Db connection failed!!!');
})