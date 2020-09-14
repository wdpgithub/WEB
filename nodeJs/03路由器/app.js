var  express=require('express');
var router=require('./router');
var path = require('path');
var server=express();
//处理post请求数据
var bodyParser=require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));


server.use(express.static(path.join(__dirname,'/public')));
// server.use(express.static(__dirname+'/public'))
server.use('/fc',router);
server.listen(8080);