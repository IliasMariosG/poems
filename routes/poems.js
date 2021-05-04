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
  res.render('addPoem')
});

/* Add a new poem. */
router.post('/', async function(req, res, next) {
  // "name" field from textarea from addPoem.ejs
  const content = req.body.content
  await poem.insertPoem(content, () => {
    res.send('Success. Poem added');
  })
  
});

module.exports = router;
