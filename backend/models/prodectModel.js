const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name :{
        type:String,
        default : true
    },
    price : {
        type:Number,
        default: true
    }

})

module.exports = mongoose.model('Prodect' ,productSchema)