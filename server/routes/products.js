const express = require('express');
const router = express.Router();

// REQUIRED MIDDLEWARE
const productController = require('../controllers/productController.js');

router.get('/', productController.getProducts, (req, res) => {
  res.status(200).json(res.locals.products);
});

router.post('/:id', productController.addProduct, (req, res) => {
  res.status(200).json(res.locals.newProduct);
});

module.exports = router;
