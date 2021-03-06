var errorhandler = require('errorhandler');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var poemsRouter = require('./routes/poems')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// using app.use to serve up static CSS files in public/assets/folder
// when /public link is called in ejs files.
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));
app.use(errorhandler());

app.use('/', indexRouter);
app.use('/poems', poemsRouter);

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  if (process.env.NODE_ENV === 'development') {
    // only use in development
    res.locals.error = err;
  }
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
