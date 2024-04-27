const express=require('express');
const router=express.Router();
const users=require('../Model/studentDash');
router.use(express.json());

//to post data to form

router.post('/add',async(req,res)=>{
    try {
        const post=req.body;
        const sdata=await users(post).save()
        console.log(sdata)
        res.status(200).send({message:"Exit form submitted"});
        
        } catch (error) {
        console.log(error)
        
    }
    
})
module.exports=router;
