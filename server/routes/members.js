const express = require('express');
const router = express.Router();

// REQUIRED MIDDLEWARE
const memberController = require('../controllers/memberController.js');

// GET - logged in member from database
router.get('/', memberController.getMember, (req, res) => {
  res.status(200).json(res.locals.member);
});

// POST - sign up new member
router.post('/', (req, res) => {
  res.status(200).json(res.locals.newMember);
});

module.exports = router;
