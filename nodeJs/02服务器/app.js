var express = require('express');
//搭建服务器
var server =express();
//加载静态资源
server.use(express.static(__dirname+'/public'))
//use:资源加载
server.use('/',function(req,res){
    res.send('hello world')
})
server.listen(8888)