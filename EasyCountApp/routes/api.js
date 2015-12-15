var express = require('express');
var router = express.Router();

var Usuario = require('../models/Usuario.js');

/**GETs y POSTs sobre un modelo*/
/* GET /usuarios listing. */
router.get('/', function(req, res, next) {
  Usuario.find(function (err, usuarios) {
    if (err) return next(err);
    res.json(usuarios);
  });
});

/* POST /usuarios */
router.post('/', function(req, res, next) {
  Usuario.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /usuarios/id */
router.get('/:id', function(req, res, next) {
  Usuario.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /usuarios/:id */
router.put('/:id', function(req, res, next) {
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /usuarios/:id */
router.delete('/:id', function(req, res, next) {
  Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;