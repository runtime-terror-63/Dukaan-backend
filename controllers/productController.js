const Product = require("../models/Product");


exports.createProduct = async (req, res)=>{
  try{
    const {name, description, mrp, saleprice,categoryId}  = req.body;
    const storeId = req.body.storeId;
    const newProduct = await new Product({name, description, mrp, saleprice, categoryId, storeId});
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  }catch(err){
    res.status(500).json('Internal server error ', err);
  }
};

exports.getProductsByStore = async (req, res)=>{
  try{
    const storeId = req.params.storeId;
    const products = await Product.find({storeId});
    res.status(200).json(products);
  }catch(err){
    res.status(500).json('Internal server error ', err);
  }
}
