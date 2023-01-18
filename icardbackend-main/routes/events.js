const events = require('../models/events');
// const multer = require('multer');
// const multers3 = require('multer-s3');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const aws = require('aws-sdk');


const region = process.env.REGION;
const secretkey = process.env.SECRET_ACCESS_KEY;
const accesskey = process.env.ACCESS_KEY;
const bucketName = process.env.BUCKET; 
const s3 = new aws.S3({
    region,
    accessKeyId:accesskey,
    secretAccessKey:secretkey,
    signatureVersion:'v4',
});

async function generateUploadUrl(filetype){
    const imageName =((Date.now().toString())+'.'+filetype).toString();
    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })
    const uploadURL = await s3.getSignedUrlPromise('putObject',params);
    
    return uploadURL;
}

router.delete('/api/devent/:id',async (req,res)=>{
    try {
        const dt = await events.findByIdAndDelete(req.params.id);
        const url = dt.image;
        const urlsplit= url.split('/');
        const filename = urlsplit[urlsplit.length-1];
        // const filename = "javaproject.text";
        const params= ({
            Bucket: bucketName,
            Key: filename
        })
        const delet = await s3.deleteObject(params, (err, data) => {
            if (err) {
                res.json({status:"error"});
            } else {
               res.json({status:'ok'});
            }
        })
    } catch (error) {
        res.json({status:"error"});
    }
})
router.get('/api/geturl/:filetype',async (req,res)=>{
    try {
        const {filetype}=req.params;
        const url =await generateUploadUrl(filetype);
        res.json({status:'ok',url});
    } catch (error) {
        res.json({error});
    }
})




router.post('/api/addevent',async (req,res)=>{
    try {
       const {name,desc,image, eventDay,eventMonth,eventYear,destination }= req.body;
       const fulltime = Date.now().toString();
       const ent = await events.create({
        name,
        desc,
        eventDay,
        eventMonth,
        eventYear,
        destination,
        fulltime,
        image,
       })
       res.json({status:'ok'});
    } catch (error) {
        res.json({status:"error"});
    }
})
router.get("/api/getevent",async (req,res)=>{
    try {
        const evnt= await events.find();
        res.json({status:"ok",events:evnt});
    } catch (error) {
        res.json({status:"error"});
    }
})
module.exports = router;