const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_URL)
.then(()=>{
    console.log('Sdash-Db connected...');
})

.catch(()=>{
    console.log('Db connection failed!!!');
})