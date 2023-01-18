const mongoose = require('mongoose');

const reguser = new mongoose.Schema({
    gname:{
        type:String,
        required:true
    },
    name:{
        type:Array,
        required:true
    },
    tnartist:{
        type:Number,
        required:true,
    },
    eventId:{
        type:String,
        required: true,
    },
    TOP:{
        type:String
    },
    FOICD:{
        type:String,
        required:true
    },
    DOA:{
        type:String,
        required:true
    },
    applyDay:{
        type:String,
        required: true
    },
    applyMonth:{
        type:String,
        required: true
    },
    applyYear:{
        type:String,
        required: true
    },
    fulltime:{
        type:String,
        required: true
    },
    gphoto:{
        type:String,
    },
    img:{
        type:String,
        required: true
    },
    adhar:{
        type:String,
        required: true
    },
    sign:{
        type:String,
        required:true
    },
    PEON:{
        type:String,
        required: true
    },
    officer:{
        type: String,
        required: true
    },
    commisioner:{
        type: String,
        required: true
    },
    isCardAlloted:{
        type: Boolean,
        require: true
    }
})

const newReg=mongoose.model('registeruser2',reguser);

module.exports=newReg;