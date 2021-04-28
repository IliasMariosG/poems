var express = require('express');
var router = express.Router();
const poem = require('../public/javascripts/poem')

/* GET poems list page. */
router.get('/', async function(req, res, next) {
  await poem.allPoems((allPoems) => {
    res.render('poems', { 
      message: allPoems
    });
  });
});

/* GET add poem page. */
router.get('/new', function(req, res, next) {
  let content = req.body;
  res.render('addPoem', { 
    message: content
  });
});

/* Add a new poem. */
router.post('/new', function(req, res, next) {
  const content = req.body.content
  res.send(`success: ${content}`)
});

module.exports = router;
