const express = require('express');
const router = express.Router();

// REQUIRED MIDDLEWARE
const memberController = require('../controllers/memberController.js');

router.get('/', memberController.getMember, (req, res) => {
  res.status(200).json(res.locals.member);
});

router.post('/', (req, res) => {
  res.status(200).json(res.locals.newMember);
});

module.exports = router;
