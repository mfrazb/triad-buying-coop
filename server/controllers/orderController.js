const db = require('../models/tbcModels.js');

const orderController = {};

//retrieve order summary from database
orderController.getOrder = async (req, res, next) => {
  // TO DO - pull user_id from login - currently hardcoded with 200

  const text = `SELECT * from ordered_items WHERE member_id=200;`;
  try {
    const orderSummary = await db.query(text);
    console.log('orderController.getOrder response:', orderSummary.rows);
    res.locals.orderSummary = orderSummary.rows;
    return next();
  } catch (error) {
    return next({
      log: `orderController.getOrder caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

// reserve quantity of products
orderController.reserveProduct = async (req, res, next) => {
  // TO DO - add order_id, if user tries to reserve twice, don't add to database second time
  const { ordered_quantity, ordered_status, member_id, product_id } = req.body;

  const text = `INSERT INTO ordered_items (ordered_quantity, ordered_status, member_id, product_id) VALUES (${ordered_quantity}, '${ordered_status}', ${member_id}, ${product_id});`;

  console.log(text);
  try {
    const reserved = await db.query(text);
    console.log('successfully added to ordered_items');
    return next();
  } catch (error) {
    return next({
      log: `productController.reserveProduct caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

module.exports = orderController;
