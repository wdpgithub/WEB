var express = require('express');
var router = express.Router();
var mongo=require('./mongo2');
var ObjectID = require('mongodb').ObjectID;
// 对于字符串加密
var crypto=require('crypto');
function User(user){
  this.name=user.name;
  this.pwd=user.pwd;
  this.id=user.id;
  this.veri=user.veri
}
// {
//   name:user.name,
//   pwd:user.pwd,
//   id:user.id,
//   veri:user.veri
// }
/* GET home page. */
// router.get('/AdminLoginAndRegHandler', function(req, res) {
//     if(req.query.userName=='lee'&&req.query.pwd=='123456'){
//       res.send('登陆成功')
//     }else{
//       res.send('登录失败')
//     }
// });
router.get('/AdminLoginAndRegHandler',function(req,res){
  if(req.query.action=='verification'){
    var str='ABCDEFGHIHKLMNOPQRSTUVWXYZ0123456789abcdefghigklmnopqrstuvwxyz';
    var veri='';
    for(var i=0;i<4;i++){
      var dom=Math.floor(Math.random()*str.length);
      veri+=str[dom]
    }
    var user={
      name:'',
      pwd:'',
      id:'',
      veri:veri
    }
    req.session.user=new User(user);
    console.log(req.session.user);
    res.send(veri)
  }else if(req.query.action=='checkVerification'){
    if(req.query.veri.toUpperCase()==req.session.user.veri.toUpperCase()){
      res.send('校验成功')
    }else{
      res.send('校验失败')
    }
  }
})

router.post('/AdminLoginAndRegHandler',function(req,res){
  if(req.query.action=='add'){
    var selector={
      userName:req.body.userName
    };
    mongo('find','peng',selector,function(data){
      console.log(data)
      if(data.length==0){
        mongo('find','peng',null,function(data){
          var selector2={};
          selector2.tokenId=data.length+1;
          selector2.createAt=new Date();
          selector2.userName=req.body.userName==''?'false':req.body.userName;
          selector2.pwd=req.body.pwd==''?'false':req.body.pwd;
          selector2.phone=/^1(5|8|7)\d{9}$/.test(req.body.phone)?req.body.phone:'false';
          // 把我们的密码进行加密
          var md5=crypto.createHash('md5');
          selector2.pwd=md5.update(req.body.pwd).digest('base64')
          selector2.trueName=req.body.trueName==''?'false':req.body.trueName
          if(selector2.userName!='false'&&selector2.trueName!='false'&&selector2.pwd!='false'&&selector2.phone!='false'){
            mongo('ins','peng',selector2,function(data){
              if(data.result.n==1){
                res.send('注册成功')
              }else{
                res.send('注册失败')
              }
            })
          }else{
            res.send('输入有误')
          }

        })
      }else{
        res.send('此用户已注册')
      }
    })
  }else if(req.query.action=='login'){
    var selector3={};
    selector3.userName=req.body.userName;
    var MD5=crypto.createHash('md5');
    selector3.pwd=MD5.update(req.body.pwd).digest('base64');
    mongo('find','peng',selector3,function(data){
      // [{username:'lee',pwd:'123456'}]
      if(data.length!=0){
        req.session.user.name=data[0].userName;
        req.session.user.pwd=data[0].pwd;
        req.session.user.id=data[0]._id
        res.send('登陆成功')
      }else{
        res.send('用户名或者密码错误')
      }
    })
  }
})

router.get('/AdminHandler',function(req,res){
    if(req.query.action=='quit'){
      if(req.session.user.name==''){
        res.send('您还没有登录')
      }else{
        req.session.user={}
        res.send('已成功退出')
      }
    }else if(req.query.action=='returnuserinfo'){
        var selector={};
        selector._id=new ObjectID(req.session.user.id);
        mongo('find','peng',selector,function(data){
          if(data.length==0){
            res.send('您还未登陆。请先登录')
          }else{
            res.send(data)
          }
        })
    }else if(req.query.action=='show'){
      var selector={};
      selector.userName={$regex:'.*'+req.query.search+'.*',$options:'i'}
      mongo('find','peng',selector,function(data){
        if(data.length==0){
          res.send('未查到数据')
        }else{
          res.send(data)
        }
      })
    }else if(req.query.action=='updatepass'){
     var oldPwd=req.query.oldPwd;
     var newPwd=req.query.newPwd;
     var md5=crypto.createHash('md5');
     oldPwd=md5.update(oldPwd).digest('base64');
     var MD5=crypto.createHash('md5');
     newPwd=MD5.update(newPwd).digest('base64');
     if(oldPwd==req.session.user.pwd){
      var selector=[
        {userName:req.session.user.name},
        {$set:{pwd:newPwd}}
      ]
       mongo('updateone','peng',selector,function(data){
        if(data.result.n==1){
          res.send('修改成功')
        }else{
          res.send('修改失败')
        }
       })
     }else{
       res.send('旧密码输入错误')
     }
    }else if(req.query.action=='paginition'){
      var num=req.query.num;
      var selector={
        tokenId:{$gte:3*parseInt(num-1)+1,$lte:3*parseInt(num)}
      }
      mongo('find','peng',selector,function(data){
        if(data.length==0){
          res.send('没有更多数据')
        }else{
          res.send(data)
        }
      })
    }else if(req.query.action=='delete'){
      var selector1={
        tokenId:parseInt(req.query.tokenId)
      }
      mongo('del','peng',selector1,function(data){
        if(data.result.n==0){
          res.send('删除失败')
        }else{
          var selector2=[
            {tokenId:{$gt:parseInt(req.query.tokenId)}},
            {$inc:{tokenId:-1}}
          ]
          mongo('updatemany','peng',selector2,function(data){
            if(data.result.n==0){
              res.send('删除失败')
            }else{
              res.send('删除成功')
            }
          })
        }
      })
    }
})

module.exports = router;
