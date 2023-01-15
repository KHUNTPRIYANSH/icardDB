const express=require('express');
const admin=require("../models/admin")

const routera=express.Router();

routera.post("/api/admin",async(req,res)=>{
    
  console.log(req.body);
  const {type,id,password}=req.body;


  const adminuser=await admin.findOne({role:type,id:id,password:password})
  /*try{
    const adminuser=await admin.create({

        role:req.body.type,
        id:req.body.id,
        password:req.body.password

    })}
    */

    if(adminuser)
    {
        res.json({status:"ok",role:type});
        console.log(adminuser)
    }
  else
  {
    res.json({status:"error",error:"duplicate admin"})
  }


})

module.exports=routera;