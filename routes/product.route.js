const express = require("express");
const router = express.Router();

const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");
const verifyToken = require('../middleware/auth.middleware.js');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', verifyToken, createProduct);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;