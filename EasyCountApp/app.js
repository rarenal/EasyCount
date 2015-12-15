var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/pages');
var usuarios = require('./routes/api');

var app = express();

//conexion a bbdd
mongoose.connect('mongodb://localhost/test', function(err) {
  if(err) {
    console.log('Connection error', err);
  } else {
    console.log('Connection successful');
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/includes", express.static(__dirname + '/includes'));
app.use("/images", express.static(__dirname + '/images'));
//add this so the browser can GET the bower files


//Definen las rutas
app.use('/', routes);
app.use('/usuarios', usuarios);
//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
