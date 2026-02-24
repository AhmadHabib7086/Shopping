const mongoose = require('mongoose')

 

const userSchema = new mongoose.Schema({
    fullName :{
        type:String,
        default : true
        
    },
    email :{
        type:String,
        default:true,
        uniqe:true
    },
    password: {
        type:String,
        default:true
    },

}) 
 
module.exports = mongoose.model("User" ,userSchema)

