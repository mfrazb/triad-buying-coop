const db = require('../models/tbcModels.js');

const memberController = {};

//retrieve current user from db
memberController.getMember = async (req, res, next) => {
  // TO DO - pull username from login

  const text = `SELECT * from members WHERE email = 'sarahsharp@sarahsharp.com';`;
  try {
    const member = await db.query(text);
    console.log('memberController.getMember response:', member.rows);
    res.locals.member = member.rows[0];
    return next();
  } catch (error) {
    return next({
      log: `memberController.getMember caught error: ${error}`,
      message: { err: 'See server log for details' },
    });
  }
};

// TO DO: user signs up for co-op
memberController.addMember = async (req, res, next) => {
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

module.exports = memberController;
