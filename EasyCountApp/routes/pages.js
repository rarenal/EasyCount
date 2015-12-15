var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EasyCount' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contact-form', { title: 'EasyCount' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'EasyCount' });
});

router.get('/quienessomos', function(req, res, next) {
  res.render('quienessomos', { title: 'EasyCount' });
});

module.exports = router;
