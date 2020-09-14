var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');//可以将请求信息打印在控制台，便于请求开发测试
var session=require('express-session')//express-session需要下载

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(session({
  name:'fcht',  //设置 cookie名称
  secret:'fcht', // 设置加密字符串，
  cookie:{
      maxAge:800000000//设置过期时间
  },
  resave:false,  //是否每次请求都需要重新设置 session
  saveUninitialized:false   //每次请求是否需要初始化
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/VueHandler', indexRouter);
// app.use('/users', usersRouter);
// session配置

module.exports = app;
