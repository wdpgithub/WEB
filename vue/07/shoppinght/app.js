var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//express-session是第三方模块需要下载引入
var session=require('express-session')



var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

//session:跟cookie差不多,用来储存用户信息的,这个session通过req.session获取
app.use(session({
	name:'ptch',
	secret:'ptch',
	cookie:{
		maxAge:800000000
	},
	resave:false,
	saveUninitialized:false
}))
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/vueHandler', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//next(createError(404));
//});

// error handler
//app.use(function(err, req, res, next) {
//// set locals, only providing error in development
//res.locals.message = err.message;
//res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//// render the error page
//res.status(err.status || 500);
//res.render('error');
//});

module.exports = app;
