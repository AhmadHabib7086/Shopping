const Product = require('../models/prodectModel')

exports.createProduct = async (req ,res)=>{
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)

        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}