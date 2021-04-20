var express = require('express');
var router = express.Router();
const poem = require('../public/javascripts/poem')

/* GET poems list page. */
router.get('/', async function(req, res, next) {
  await poem.allPoems((allPoems) => {
    res.render('poems', { message: allPoems });
  });
});

module.exports = router;
