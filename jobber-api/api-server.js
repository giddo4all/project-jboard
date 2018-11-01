// Imports all the modules needed
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');




const port = 5000;
const app = express();
// const PropertiesReader = require('properties-reader');
// const properties = PropertiesReader('../properties.file');
var mongo = require('mongodb')
var routes = require('./routes/index');


app.listen(port, () => `Server running on port ${port}`);


app.use('/', routes);


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'images/favicon.jpg')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(fileUpload());
// Define what route files to use being routes/index.js for /
// routes/users.js for /users
// The route files then render the page


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);
});