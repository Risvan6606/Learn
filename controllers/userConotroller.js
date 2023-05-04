const user=require('../models/userModel')
const loadRegister=async(req,res)=>{
    try {
        res.render('ragistration')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={
    loadRegister
}