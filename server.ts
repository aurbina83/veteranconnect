require('dotenv').config({ silent: true });
import express = require('express');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import helmet = require('helmet');
import passport = require('./config/passport');
let nodemailer = require('nodemailer');
let ses = require('nodemailer-ses-transport');
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./io/chats')(io);
require('./Events/model');
require('./Comments/model');
require('./Users/model');
require('./Access/model');
require('./QRF/model');
require('./config/passport');

let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/vc';
mongoose.connect(mongoUrl, (err) => {
  if (err) console.error(err);
  else console.log('Connected to ' + mongoUrl);
});

// view engine setup
if(process.env.NODE_ENV = 'dev') app.set('views', './views');
if(process.env.NODE_ENV = 'prod') app.set('views', './dist/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/favicon.ico'));
if (process.env.NODE_ENV !== 'test') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(require('./utils/sanitize')());
app.use(cookieParser());
app.use(helmet());

app.use('/templates', require('./routes/viewRoutes'));
if(process.env.NODE_ENV="prod") app.use(express.static('./dist'));
if(process.env.NODE_ENV="dev") app.use(express.static('./ngApp'));
app.use('/scripts', express.static('bower_components'));

app.use('/api/v1/yelp', require('./YelpApi/routes'));
app.use('/api/v1/users', require('./Users/routes'));
app.use('/api/v1/comments', require('./Comments/routes'));
app.use('/api/v1/events', require('./Events/routes'));
app.use('/api/v1/access', require('./Access/routes'));
app.use('/api/v1/qrf', require('./QRF/routes'));


app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers
app.use(function(err: any, req, res, next) {
  res.status(err.status || 500);
  // Don't leak stack trace if not in development
  let error = (app.get('env') === 'development') ? err : {};
  res.send({
    message: err.message,
    error: error
  });
});
export = {app: app, server: server};
