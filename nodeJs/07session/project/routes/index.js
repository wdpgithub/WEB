var express = require('express');
var router = express.Router();
var mongo= require('./mongo2');

function User(user){
  this.name= user.name;
  this.id = user.id;
  this.password= user.password;
  this.veri= user.veri;
}

/* GET home page. */
router.get('/AdminLoginAndRegHandler', function(req, res) {
  if(req.query.action=='verification'){
    var str='ABCDEFGHIHKLMNOPQRSTUVWXYZ0123456789abcdefghigklmnopqrstuvwxyz';
    var veri='';
    for(var i=0;i<4;i++){
      var dom=Math.floor(Math.random()*str.length);
      veri+=str[dom];
    }
    var user={
      id:'',
      name:'',
      password:'',
      veri:veri
    };
    req.session.user=new User(user); 
    console.log(req.session.user);
    res.send(veri);
    
  }
});


router.post('/register',function(req,res){
  if(req.query.action=='ins'){
    console.log(req.query);
    console.log(req.body);
    
    var selector={};
    selector.name=req.body.userName;
    selector.ped=req.body.pwd;
    mongo('ins','peng',selector,function(data){
      console.log(data);
        res.send('哈哈哈哈')
    })
  }
});

module.exports = router;
