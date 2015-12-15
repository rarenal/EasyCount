var express = require('express');
var router = express.Router();

var Usuario = require('../models/Usuario.js');

/**GETs y POSTs sobre un modelo*/
/* GET /usuarios listing. */
router.get('/usuarios', function(req, res, next) {
  Usuario.find(function (err, productos) {
    if (err) return next(err);
    res.json(productos);
  });
});

/* POST /usuarios */
router.post('/usuarios', function(req, res, next) {
  Usuario.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /usuarios/id */
router.get('/usuarios/:id', function(req, res, next) {
  Usuario.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /usuarios/:id */
router.put('/usuarios/:id', function(req, res, next) {
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /usuarios/:id */
router.delete('/usuarios/:id', function(req, res, next) {
  Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;