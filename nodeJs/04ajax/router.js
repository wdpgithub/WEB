var express = require('express');
var router= express.Router();
router.get('/login',function(req,res){
    console.log(req.query);
    res.send('hello world')
    
})
router.post('/login1',function(req,res){
    console.log(req.body);
    res.send('hello world')
    
})
router.get('/node',function(req,res){
    if(req.query.userName=='lee'&&req.query.pwd=='123456'){
        res.send('登陆成功');
    }else{
        res.send('登陆失败')
    }

})


module.exports=router;