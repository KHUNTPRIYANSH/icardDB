const express=require('express');
const registerdata=require("../models/register");
const newReg = require("../models/newReg");
const multer=require('multer');
const path=require('path');
const mongoose=require('mongoose');
const { ok, ifError } = require('assert');

const routeruser=express.Router();


// const storage=multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null,'./images')
//     },
//     filename: function(req,file,cb){
//         cb(null,Date.now()+path.extname(file.originalname));
//     }
    
// })


// const upload=new multer({
//     storage:storage
// })


// routeruser.post('/api/evregister',upload.array("profile"),async(req,res)=>{
    

//     try{
    
//      const filename=req.files;
//       const {name,gname,number,email,tnartist,TOP,FOICD,DOA}=req.body;

//       console.log(filename[0].filename)
//       console.log(filename[1].filename)
//       console.log(name);

//       const dt=new Date();
//  const dat=dt.getDate();
//  const month=dt.getMonth()+1;
//  const year=dt.getFullYear();
//  const fulldate=dat+"/"+month+"/"+year

//      const usernew=new registerdata({
//         name:name,
//         gname:gname,
//         number:number,
//         email:email,
//         tnartist:tnartist,
//         TOP:TOP,
//         FOICD:FOICD,
//         DOA:DOA,
//         img:filename[0].filename,
//         adhar:filename[1].filename,
//         sign:filename[2].filename,
//         PEON:"Pending",
//         officer:"Pending",
//         commisioner:"Pending",
//         date:fulldate
        
        
//       })

//       const data= await usernew.save();
//       if(data){

//         res.status(200).json({status:"ok",name:name})
//       }

   
       
//    }catch(err)
//     {
//         res.status(500).json({error:err.message});
//     }

// })

routeruser.post("/api/regforevent",async (req,res)=>{
    try {
        const {gname,name,tnartist,eventId,TOP,FOICD,DOA,gphoto,img,adhar,sign}=req.body;
        const dt = new Date();
        const applyDay = dt.getDate().toString();
        const applyMonth= (dt.getMonth()+1).toString();
        const applyYear=dt.getUTCFullYear().toString();
        const fulltime = Date.now().toString();
        const regform = await newReg.create({
            gname,
            name,
            tnartist,
            eventId,
            TOP,
            FOICD,
            DOA,
            applyDay,
            applyMonth,
            applyYear,
            fulltime,
            gphoto,
            img,
            adhar,
            sign,
            PEON:"Pending",
            officer:"Pending",
            commisioner:"Pending",
            isCardAlloted:false
        });
        if(regform){
            res.json({status:"ok"});
        }else{
            res.json({status:'server error...'});
        }
    } catch (error) {
        res.json({status:'error'});
    }
})

routeruser.get("/api/getuser",async(req,res)=>{
    try{
        const getuser= await registerdata.find();

        res.status(200).json({status:"ok",getuser})
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }
})

routeruser.get("/count/clerk",async (req,res)=>{
    try {
        const count = await registerdata.countDocuments();
        res.json({count});
    } catch (error) {
        res.json({count:0})
    }
})
routeruser.get("/count/dydo",async (req,res)=>{
    try {
        const count = await registerdata.find({PEON:"Approved"}).count();
        res.json({count});
    } catch (error) {
        res.json({count:0})
    }
})
routeruser.get("/count/commisioner",async (req,res)=>{
    try {
        const count = await registerdata.find({officer:"Approved"}).count();
        res.json({count});
    } catch (error) {
        res.json({count:0})
    }
})


routeruser.get("/get/clerk/:start/:ps",async(req,res)=>{
    try{
        const {start,ps}=req.params;
        const admindata =await registerdata.find().skip(start).limit(ps);
        // const admindata =await registerdata.find();
        res.status(200).json({admindata});
    }   
    catch(error)
    {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/get/clerk/:keyword",async(req,res)=>{

    try{
        const {keyword}= req.params;
        const admindata =await registerdata.find({$or: [{"name": new RegExp(keyword)},{"gname": new RegExp(keyword)},{"TOP": new RegExp(keyword)}]});
        res.status(200).json({admindata});
    }   
    catch(error)
    {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.post("/date/clerk", async (req,res)=>{
    try {
        const {dt}= req.body;
        const admindata =await registerdata.find({"date": new RegExp(dt)});
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/name/clerk/:start/:ps/", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find().sort({name:1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/time/clerk/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find().sort({fulltime:1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/timed/clerk/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find().sort({fulltime:-1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})


routeruser.get("/get/dydo/:start/:ps",async(req,res)=>{
    try{
        const {start,ps}=req.params;
        const admindata =await registerdata.find({PEON:"Approved"}).skip(start).limit(ps);
        res.status(200).json({admindata})
    }
    catch(error)
    {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/get/dydo/:keyword",async(req,res)=>{

    try{
        const {keyword}= req.params;
        const admindata =await registerdata.find({$and: [{PEON:"Approved"},{$or: [{"name": new RegExp(keyword)},{"gname": new RegExp(keyword)},{"TOP": new RegExp(keyword)}]}]});
        res.status(200).json({admindata});
    }   
    catch(error)
    {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.post("/date/dydo", async (req,res)=>{
    try {
        const {dt}= req.body;
        const admindata =await registerdata.find({$and:[{PEON:"Approved"},{"date": new RegExp(dt)}]})
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/name/dydo/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find({PEON:"Approved"}).sort({name:1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/time/dydo/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find({PEON:"Approved"}).sort({fulltime:1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/timed/dydo/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find({PEON:"Approved"}).sort({fulltime:-1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})


routeruser.get("/get/commisioner/:start/:ps",async(req,res)=>{

    try{
        const {start,ps}= req.params;
        const admindata =await registerdata.find({officer:"Approved"}).skip(start).limit(ps);
        res.status(200).json({admindata})

    }
    catch(error)
    {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/get/commisioner/:keyword",async(req,res)=>{

    try{
        const {keyword}= req.params;
        const admindata =await registerdata.find({$and: [{officer:"Approved"},{$or: [{"name": new RegExp(keyword)},{"gname": new RegExp(keyword)},{"TOP": new RegExp(keyword)}]}]});
        res.status(200).json({admindata});
    }   
    catch(error)
    {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.post("/date/commisioner", async (req,res)=>{
    try {
        const {dt}= req.body;
        const admindata =await registerdata.find({$and:[{officer:"Approved"},{"date": new RegExp(dt)}]})
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/name/commisioner/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find({officer:"Approved"}).sort({name:1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/time/commisioner/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find({officer:"Approved"}).sort({fulltime:1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})
routeruser.get("/timed/commisioner/:start/:ps", async (req,res)=>{
    try {
        const {start,ps}= req.params;
        const admindata =await registerdata.find({officer:"Approved"}).sort({fulltime:-1}).skip(start).limit(ps);
        res.status(200).json({admindata});
    } catch (error) {
        res.status(500).json({status:500,error:error.message})
    }
})


routeruser.get("/api/getuser/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"error id is not a valid"})   
    }
    
    try{

        const getdec= await registerdata.findById(id)
        res.status(200).json(getdec)

    }catch(error)
    {
             res.status(404).json({msg:"error in that"})
    }


})

routeruser.delete("/api/getuser/:id",async(req,res)=>{

    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }


try{

    const deletedoc=await registerdata.findByIdAndDelete({_id:id})
    res.status(200).json(deletedoc);

}catch(error)
{
   res.status(404).json({msg:"error "});
}
})

routeruser.patch("/api/getuser/PEON/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await registerdata.findByIdAndUpdate(id,{PEON:"Approved"})

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }

})
routeruser.patch("/api/getuser/officer/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await registerdata.findByIdAndUpdate(id,{officer:"Approved"})

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }

})
routeruser.patch("/api/getuser/commisioner/:id",async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }
    try{

        const updateworkout= await registerdata.findByIdAndUpdate(id,{commisioner:"Approved"})

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }

})



routeruser.get("/checkstatus/:id",async(req,res)=>{
    
    const {id}=req.params;

    try{

        if(!mongoose.Types.ObjectId.isValid(id))
        {
          returnres.status(404).json({status:"invalid",msg:"id is not valid"})
        }

        const updateworkout= await registerdata.findOne({_id:id,PEON:"Approved",officer:"Approved",commisioner:"Approved"})

       if(!updateworkout){
         return res.status(201).json({status:"nfound",msg:"document not approved yet" })
        }
      
        res.status(200).json({status:"found",msg:"document approved successfully"})
       


    }catch(error)
    {
        res.status(404).json({msg:"error in documents",error:error.me})

    }

})


routeruser.get("/Odisi/clerk",async(req,res)=>{

    try{

        const eventodi= await registerdata.find({FOICD:"Odisi"})
        res.status(200).json(eventodi);
        }catch(error)
        {
            res.status(404).json({status:"error",msg:"error in the code"})
        }
   })
routeruser.get("/Katthak/clerk",async(req,res)=>{

    try{

        const eventodi= await registerdata.find({FOICD:"Katthak"})
        res.status(200).json(eventodi);
        }catch(error)
        {
            res.status(404).json({status:"error",msg:"error in the code"})
        }
   })
routeruser.get("/Kathakali/clerk",async(req,res)=>{

    try{

        const eventodi= await registerdata.find({FOICD:"Kathakali"})
        res.status(200).json(eventodi);
        }catch(error)
        {
            res.status(404).json({status:"error",msg:"error in the code"})
        }
   })
routeruser.get("/Kuchipudi/clerk",async(req,res)=>{

    try{

        const eventodi= await registerdata.find({FOICD:"Kuchipudi"})
        res.status(200).json(eventodi);
        }catch(error)
        {
            res.status(404).json({status:"error",msg:"error in the code"})
        }
   })





module.exports=routeruser;