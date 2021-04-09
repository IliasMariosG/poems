var express = require('express');
var router = express.Router();
const poem = require('../public/javascripts/poem')


const allPoems = poem.allPoems

/* GET poems list page. */
router.get('/', function(req, res, next) {
  res.render('poems', { message: allPoems });
});

module.exports = router;