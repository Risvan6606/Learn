const express=require('express');
const { model } = require('mongoose');
const userRoute=express();

const userController=require("../controllers/userConotroller")

userRoute.get('/register',userController.loadRegister)
module.exports=userRoute;
"my thred commit"

"this is featur"