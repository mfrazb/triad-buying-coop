const db = require('../models/tbcModels.js');

const userController = {};

//retrieve all products from db
productController.getProducts = async (req, res, next) => {
  // query string for database
  const text =
    'SELECT products.*, vendors.company_name FROM products INNER JOIN vendors ON products.vendor_id = vendors._id;';
  try {
    const products = await db.query(text);
    console.log('productController.getProducts response:', products.rows);
    res.locals.products = products.rows;
    return next();
  } catch (error) {
    return next({
      log: `productController.getProducts caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

// TO DO: user with admin priveleges adds item(s) to database
productController.addProduct = async (req, res, next) => {
  console.log(req.params.id);
  try {
    res.locals.newProducts = 'hello Meredith';
    return next();
  } catch (error) {
    return next({
      log: `productController.addProduct caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

module.exports = productController;
