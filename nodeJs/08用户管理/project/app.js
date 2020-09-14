var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');

var indexRouter = require('./routes/index');


var app = express();
app.use(session({
  name:'nfct',
  secret:'nfct',
  cookie:{
    maxAge:800000000
  },
  resave:false,
  saveUninitialized:false
}))



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/VueHandler', indexRouter);


module.exports = app;
