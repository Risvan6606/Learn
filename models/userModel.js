const mongoose= require('mongoose')

 const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requiredd:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Number,
        required:true
    },
    isVarified:{
        type:Number,
        default:0
    }
})
"this is master"

module.exports= mongoose.model('user',userSchema)


