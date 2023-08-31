const express = require('express');
const router = express.Router();

// REQUIRED MIDDLEWARE
const productController = require('../controllers/productController.js');

// GET - all products from db
router.get('/', productController.getProducts, (req, res) => {
  res.status(200).json(res.locals.products);
});

// POST - for admin to add product(s) to database
// TO DO - create middleware for this route
router.post('/:id', productController.addProduct, (req, res) => {
  res.status(200).json(res.locals.newProducts);
});

module.exports = router;
