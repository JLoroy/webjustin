var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/juliette',  function(req, res, next) {
  res.render('juliette', { title: 'Juliette' });
});

module.exports = router;
