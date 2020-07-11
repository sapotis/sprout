const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('<h2 style="color: yellowgreen; font-family: sans-serif;">Home Page</h2>');
});

module.exports = router;
