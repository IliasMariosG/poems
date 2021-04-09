var express = require('express');
var router = express.Router();


const poems = [
  "All that is gold does not glitter",
  "Shall be",
  "It is a sport"
]
/* GET poems list page. */
router.get('/', function(req, res, next) {
  res.render('poems', {
    message: poems
  });
});

module.exports = router;