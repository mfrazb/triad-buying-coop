const db = require('../models/tbcModels.js');

const productController = {};

//retrieve all products from db
productController.getProducts = async (req, res, next) => {
  const text = 'SELECT * FROM products;';
  try {
    const products = await db.query(text);
    console.log(products.rows);
    res.locals.products = products.rows;
    return next();
  } catch (error) {
    return next({
      log: `productController.getProducts caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

// TO DO: Add functionality to add items to database
productController.addProduct = async (req, res, next) => {
  console.log(req.params.id);
  try {
    res.locals.newProduct = 'hello Meredith';
    return next();
  } catch (error) {
    return next({
      log: `productController.addProduct caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

module.exports = productController;
