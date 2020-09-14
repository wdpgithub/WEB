var createError = require('http-errors');//处理一些报错
var express = require('express');//引入这个模块,搭建服务器
var path = require('path');//处理路径
var cookieParser = require('cookie-parser');//cookie解析
var session=require('express-session');//打印日志
var logger = require('morgan');//在服务器当前存储用户信息

var indexRouter = require('./routes/index');

var app = express();


app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name:'fcht', //设置 cookie名称
  secret:'fcht',// 设置加密字符串，
  cookie:{
    maxAge:800000000 //设置cookie的失效时间
  },
  resave:false, // 是否每次请求都需要重新设置 session
  saveUninitialized:false //每次请求是否需要初始化
}));


app.use('/VueHandler', indexRouter);


module.exports = app;

