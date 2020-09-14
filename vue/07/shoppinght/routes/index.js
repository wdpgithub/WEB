var express = require('express');
var router = express.Router();
var mongo=require('./mongo2');
var crypto=require('crypto')
/* GET home page. */

function User(user){
	this.name=user.userName;
	this.pwd=user.pwd;
	this.veri=user.veri;
	this.id=user.id
}



router.get('/shopht', function(req, res) {
//获取验证码
	if(req.query.action=='getVeri'){
		var str='ABCEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
		var veri='';
		for(var i=0;i<4;i++){
			var dom=Math.floor(Math.random()*str.length);
			veri+=str[dom]
		}
		
		var user={
			'userName':'',
			'pwd':'',
			'veri':veri,
			'id':''
		}
		req.session.user=new User(user);
		console.log(veri);
		res.send(veri);
	}else if(req.query.action=='checkVeri'){
		if(req.query.veri.toUpperCase()==req.session.user.veri.toUpperCase()){
			res.send({success:'验证成功'})
		}else{
			res.send({err:'验证失败'})
		}
	}else if(req.query.action=='billList'){
		var selector={};
		selector.brand=req.query.brand;
		selector.factory=req.query.factory;
		selector.isPay=req.query.isPay;
		for(x in selector){
			if(selector[x]==''||selector[x]=='--请选择--'){
				delete selector[x]
			}
		}
//		console.log(selector)
		mongo('find','product',selector,function(data){
			if(data.length==0){
				res.send({err:'未查询到数据'})
			}else{
				res.send(data)
			}
		})
	}
});

router.post('/shopht',function(req,res){
	if(req.query.action=='register'){
		var selector={
			userName:req.body.userName
		}
		mongo('find','shopht',selector,function(data){
			if(data.length==0){
				var selector={};
				selector.userName=req.body.userName;
				var md5=crypto.createHash('md5');
				selector.pwd=md5.update(req.body.pwd).digest('base64')
				if(req.body.userName!=''&&req.body.pwd!=''){
					mongo('add','shopht',selector,function(data){
						if(data.result.n==1){
							res.send({success:'注册成功'})
						}else{
							res.send({err:'注册失败'})
						}
					})
				}else{
					res.send({err:'用户名或者密码不能为空'})
				}
			}else{
				res.send({err:'此用户名已注册'})
			}
		})
	}else if(req.query.action=='login'){
		var selector={};
		selector.userName=req.body.userName;
		var md5=crypto.createHash('md5');
		selector.pwd=md5.update(req.body.pwd).digest('base64');
		mongo('find','shopht',selector,function(data){
			if(data.length!=0){
				req.session.user.name=req.body.userName;
				req.session.user.pwd=req.body.pwd;	
				res.send({success:'页面即将跳转'})
			}else{
				res.send({err:'用户名或者密码错误'})
			}
		})
	}else if(req.query.action=='addList'){
		var selector={};
		selector.listCode=req.body.listCode;
		selector.brand=req.body.brand;
		selector.unite=req.body.unite;
		selector.num=req.body.num;
		selector.totalPrice=req.body.totalPrice;
		selector.factory=req.body.factory;
		selector.isPay=req.body.isPay;
		mongo('find','product',{listCode:req.body.listCode},function(data){
			if(data.length==0){
				if(selector.listCode!=''&&selector.brand!=''&&selector.unite!=''&&selector.num!=''&&selector.totalPrice!=''&&selector.factory!=''&&selector.isPay!=''){
					mongo('add','product',selector,function(data){
						if(data.result.n==1){
							res.send({success:'添加成功'})
				}else{
					res.send({err:'添加失败'})
				}
				})
				}
			}else{
				res.send({err:'此编码已存在'})
			}
		})	
	}else if(req.query.action='del'){
		var selector={};
		selector.listCode=req.body.listCode;
		mongo('deleteOne','product',selector,function(data){
			if(data.result.n==1){
				res.send({success:'删除成功'})
			}else{
				res.send({err:'删除失败'})
			}
		})
	}
})
router.post('/bill',function(req,res){
	if(req.query.action=='billupdate'){
		console.log(req.body)
		var selector=[
		{listCode:req.body.listCode},
		{
			$set:{
				brand:req.body.brand,
				unite:req.body.unite,
				num:req.body.num,
				totalPrice:req.body.totalPrice,
				factory:req.body.factory,
				isPay:req.body.isPay
			}
		}
		]
		
		mongo('updateOne','product',selector,function(data){
			if(data.result.n==1){
				res.send({success:'更新成功'})
			}else{
				res.send({err:'更新失败'})
			}
		})
	}else if(req.query.action=='updatePass'){
//		console.log(req.body)
		if(req.session.user.pwd==req.body.oldpwd){
			if(req.body.newpwd1==req.body.newpwd2){
				var md5=crypto.createHash('md5');
				var selector=[
					{userName:req.session.user.name},
					{$set:{
						pwd:md5.update(req.body.newpwd1).digest('base64')
					}}
				]
				console.log(selector)
				mongo('updateOne','shopht',selector,function(data){
					console.log(data.result)
					if(data.result.n==1){
						res.send({success:'更新成功'})
					}else{
						res.send({err:'更新失败'})
					}
				})
			}else{
				res.send({err:'两次新密码不一致'})
			}
		}else{
			res.send({err:'旧密码输入错误'})
		}
	}
})

module.exports = router;
