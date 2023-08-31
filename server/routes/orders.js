const express = require('express');
const router = express.Router();

// REQUIRED MIDDLEWARE
const orderController = require('../controllers/orderController.js');

// GET - order summary from database
router.get('/', orderController.getOrder, (req, res) => {
  res.status(200).json(res.locals.orderSummary);
});

// POST - user creates order when page loads
// TO DO - add this route and middleware

// POST - user reserves quantity of particular product
// TO DO - update to add product id as parameter
// TO DO - add middleware to decrement available product in products table
router.post('/', orderController.reserveProduct, (req, res) => {
  res.status(200).json('successfully added to ordered_items');
});

module.exports = router;
