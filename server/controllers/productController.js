const db = require('../models/tbcModels.js');

const productController = {};

async function getProducts() {
  const text = 'SELECT * FROM products;';
  try {
    const products = await db.query(text);
    console.log(products.rows);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
/*
productController.getProducts = async (req, res, next) => {
    const text = 'SELECT * FROM products;';
    try {
        const products = await db.query(text);
        console.log(products);

        return next();
    }
    catch(error) {
        return next({
            {
                log: `productController.getProducts caught error: ${error}`,
                message: {err: 'See server log for details'}
            }
        });
    }
}
*/
