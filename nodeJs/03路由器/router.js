var express=require('express');
var router= express.Router();

router.get('/node',function(req,res){
    res.send('hello world')
});
router.get('/node1',function(req,res){
    res.send('hello')
});
router.get('/verification',function(req,res){
    var str='abvcgdgdhsji7171884189';
    var str2='';
    for(var i=0;i<6;i++){
        var random=Math.floor(Math.random()*str.length)
        var str3=str[random];
        str2+=str3
    }
    res.send(str2)
});
router.get('/login',function(req,res){
    console.log(req.query);
    if(req.query.usename=='qaz'&&req.query.pwd=='123'){
        res.send('登陆成功')
    }else{
        res.send('登录失败')
    }

});
router.post('/login1',function(req,res){
    console.log(req.body);
    if(req.body.usename=='qaz'&&req.body.pwd=='123'){
        res.send('登陆成功')
    }else{
        res.send('登录失败')
    }
    
});
module.exports=router;