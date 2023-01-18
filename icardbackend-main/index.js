const express=require('express');
const router = require('./routes/auth');
const routera = require('./routes/admin');
const routeruser=require("./routes/regiuser");
const routerevent = require("./routes/events");
const cors= require('cors');
const app = express();
require("./db")
// image storage key kj9rhx5rpp
app.use(cors())
app.use(express.json());
app.use("/images",express.static("./images"))

app.get('/res',(req,res)=>{
    res.send("the work coorectly")
})

app.use(router);
app.use(routera);
app.use(routeruser);
app.use(routerevent);

app.listen(8080,()=>{
    console.log("listening on port 8080");
})
