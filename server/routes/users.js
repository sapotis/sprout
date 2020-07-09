var express = require('express');
var router = express.Router();

/* GET all users */
router.get('/', function(req, res, next) {
  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "sdhani"
  }, {
  	id: 2,
  	username: "blinkous"
  }]);
});

module.exports = router;