var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Poems',
    message: 'Here you\'ll see poems' });
});

module.exports = router;
