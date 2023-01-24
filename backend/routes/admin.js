const express=require('express');
const admin=require("../models/admin");
const mstaf = require('../models/mstaf');
const newReg = require('../models/newReg');
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

// REQUEST FOR CECKING...
routera.get('/check/:id',async (req,res)=>{
  const {id}=req.params;
  try {
    const data = await newReg.findById(id);
    if(data){
      if(data.commisioner=="Approved"){
        let obj = {
          gname: data.gname,
          LeaderName: data.name[0].name,
          NoArtist: data.tnartist,
          participants: data.name,
          eventName: data.eventName,
          groupImg: data.gphoto,
          LeaderImg: data.img,
        }
        res.json({status:'ok',data:obj});
      }else{
        res.json({status:"Duplicate Icard..."});
      }
    }else{
      res.json({status:"Duplicate Icard..."});
    }
  } catch (error) {
    res.json({status:'error'});
  }
})

// login managment
routera.post('/mstaf/login',async (req,res)=>{
  try {
    const {email,password}=req.body;
    const dt = await mstaf.findOne({email,password});
    if(dt){
      res.json({status:'ok',role:dt.role})
    }else{
      res.json({status:"error"})
    }
  } catch (error) {
    res.json({status:'error'});
  }
})
module.exports=routera;