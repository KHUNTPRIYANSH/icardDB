const express=require('express');
const admin=require("../models/admin")

const routera=express.Router();

routera.post("/api/admin",async(req,res)=>{
    
  console.log(req.body);
  const {id,password}=req.body;


  const adminuser=await admin.findOne({id:id,password:password})
    if(adminuser)
    {
        res.json({status:"ok",role:adminuser.role});
        
    }
  else
  {
    res.json({status:"invalid data",error:"invalid data"})
  }


})


module.exports=routera;