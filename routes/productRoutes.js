const express = require('express');
const { createProduct, getProductsByStore } = require('../controllers/productController');
const router = express.Router();

router.post("/product", createProduct);
router.get("/products/:storeId", getProductsByStore);

module.exports = router;