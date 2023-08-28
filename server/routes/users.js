const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { username: meredith, age: 37 },
    { username: john123, age: 27 },
  ]);
});

module.exports = router;
