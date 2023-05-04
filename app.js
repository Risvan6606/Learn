const mongoose= require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/userManagement');
 const express=require('express')
 const app= express()

 //for userRout
const userRouts=require('./routes/userRoute')
 app.use('/',userRouts)

 app.listen(3001,()=>{
    console.log("server started...");
 })