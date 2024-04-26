const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    dob:String,
    batch:String,
    gender:String
  
});

const sdashModel=mongoose.model('sdash',schema); 
module.exports=sdashModel;