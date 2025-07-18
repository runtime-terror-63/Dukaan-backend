const Product = require("../models/Product");
const Category = require("../models/Category");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, mrp, saleprice, category , storeId} = req.body;

    const categoryExists = await Category.findOne({ name:category, storeId });
    if (!categoryExists)
      return res.status(401).json({ message: "Category not found!" });

    const newProduct = new Product({
      name,
      description,
      mrp,
      saleprice,
      category,
      storeId,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json("Internal server error ", err);
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
