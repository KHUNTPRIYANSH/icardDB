const express=require('express');
const user=require('../models/user')
const jwt=require('jsonwebtoken')
const reg=require('../models/register');
const router=express.Router();


router.post('/api/register',async(req,res)=>{
    console.log(req.body);
    try{

        const {email,password,name,mobileno}=req.body;

        const users=await user.create({
            name:name,
            email:email,
            password:password,
            mobileno:mobileno,
        })
        if(users)
        {
            res.json({status:"ok"})
        }
     
    }catch(err)
    {
         res.json({status:"error",error:"duplicate data"})
    }
    
})

router.post('/api/login',async(req,res)=>{
        
      const data=await user.findOne({email:req.body.email,password:req.body.password})

      if(data){

const token=jwt.sign({
      name:user.name,
     email:user.Email
},'sceret123')

        res.json({status:"ok,user is login successful",user:token})
        
    }
    else{
        res.json({status:"error in password or email"})
    }
   
    
})
// CHART DATA

router.get('/api/eventchart', async (req,res)=>{
    try {
        const dt = await reg.aggregate([{$group:{_id: '$FOICD',count: {$sum:1}}}]);
        res.json({status:"ok",dt});
    } catch (error) {
        res.json({status:'error'});
    }
})
router.get('/api/regchartday', async (req,res)=>{
    try {
        const dt = await reg.aggregate([{$group:{_id: '$date',count: {$sum:1}}}]);
        res.json({status:"ok",dt});
    } catch (error) {
        res.json({status:'error'});
    }
})


module.exports = router