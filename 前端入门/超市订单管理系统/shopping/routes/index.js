var express = require('express');
var router = express.Router();
var mongo=require('./mongo.js');
var crypto=require('crypto');
function User(user) {
  this.id=user.id;
  this.name = user.name;
  this.password = user.password;
  this.veri = user.veri;
  this.userId=user.userId;
}

//客户端获取验证码字符及校验验证码接口
router.get('/AdminLoginAndRegHandler',function(req, res){
  if(req.query.action==="verification"){
    var randomNum=function (min,max){//生成随机数
      return Math.floor( Math.random()*(max-min)+min);
    };
    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
    var returnStr = "";
    for(var i=0; i<4; i++){
      var txt = str[randomNum(0,str.length)];
      returnStr+=txt;
    }
    var newUser = new User({
            name: "",
            password:"",
            id:"",
            veri:returnStr,
            userId:""
           });
      req.session.user = newUser;
        console.log("给session赋值");
      console.log(req.session);
    res.end('{"success":"true","data":"'+returnStr+'"}');
  }else if(req.query.action==="checkVerification"){
    //console.log("从session中取值");
      console.log('嘿嘿');
      console.log(req.query)
    if(req.session.user&&req.query.veri===req.session.user.veri){
        res.send({"success":"验证码正确"});
      }else{
        res.send({"err":"验证码错误"});
      }
  }

});


router.post('/bill',function(req,res){
	if(req.query.action=='addBill'){
		mongo('find','product',{code:req.body.code},function(data){
			if(data.length>0){
				res.send({"err":"编码不能重复"})
			}else{
			mongo('find','product',null,function(data){
					console.log(req.body)
					var selector={};
					selector.tokenId=data.length+1;
					selector.code=req.body.code? req.body.code:'false';
					selector.shopName=req.body.shopName? req.body.shopName:'false';
					selector.unit=req.body.unit? req.body.unit:'false';
					selector.Num=req.body.Num? req.body.Num:'false';
					selector.sum=req.body.sum? req.body.sum:'false';
					selector.business=req.body.business? req.body.business:'false';
					selector.isPay=req.body.isPay? req.body.isPay:'false';
					if(selector.code!='false'&&selector.shopName!='false'&&selector.unit!='false'&&selector.Num!='false'&&selector.sum!='false'&&selector.business!='false'&&selector.isPay!='false'){
					mongo('add','product',selector,function(data){
						console.log(data)
						if(data.result.n==1){
							res.send({'sucess':'注册成功'})
						}else{
							res.send({'err':'注册失败'})
						}
					})
				}else{
					res.send({'err':'格式不正确'})
				}
			})
			}
		})
	}else if(req.query.action=='showBill'){
		mongo('find','product',null,function(data){
			res.send(data)
		})
	}else if(req.query.action=='del'){
		mongo('deleted','product',{tokenId:req.body.tokenId},function(data){
			if(data.result.n==1){
				var selector=[{tokenId:{$gt:parseInt(req.body.tokenId)}},{$inc:{tokenId:-1}}];
				mongo('updateMany','product',selector,function(data){
          res.send({success:"删除成功"})
        })
      }else{
       res.send({'err':"删除失败"})
      }
		})
	}else if(req.query.action=='update'){
		var selector=[
			{code:req.body.code},
			{
				$set:{
					code:req.body.code,
					shopName:req.body.shopName,
					unit:req.body.unit,
					Num:req.body.Num,
					sum:req.body.sum,
					business:req.body.business,
					isPay:req.body.isPay
				}
			}
		];
		if(req.body.code&&req.body.shopName&&req.body.unit&&req.body.Num&&req.body.sum&&req.body.business&&req.body.isPay){
			mongo('updateOne','product',selector,function(data){
				if(data.result.n==1){
					res.send({'success':'更新成功'})
				}else{
					res.send({'err':'更新失败'})
				}
			})
		}else{
			res.send({'err':'请检查所有必填项是否填写完毕'})
		}
	}else if(req.query.action=='search'){
//		console.log(req.body)
		var selector={
			shopName:req.body.shopName,
			business:req.body.business,
			isPay:req.body.isPay
		}
		for(x in selector){
			if(selector[x]==""||selector==null){
				delete selector[x]
			}
		}
		console.log(selector)
		mongo('find','product',selector,function(data){
			if(data.length>0){
				res.send({success:'查询成功',data:data})
			}else{
				res.send({err:'没有查询到符合的条件'})
			}
		})
	}
})
router.post('/provider',function(req,res){
	if(req.query.action=='addpro'){
		mongo('find','supplier',{procode:req.body.procode},function(data){
			if(data.length>0){
				res.send({"err":"编码不能重复"})
			}else{
			mongo('find','supplier',null,function(data){
					console.log(req.body)
					var selector={};
					selector.tokenId=data.length+1;
					selector.procode=req.body.procode? req.body.procode:'false';
					selector.providerName=req.body.providerName? req.body.providerName:'false';
					selector.people=req.body.people? req.body.people:'false';
					selector.phone=req.body.phone? req.body.phone:'false';
					selector.address=req.body.address? req.body.address:'false';
					selector.fax=req.body.fax? req.body.fax:'false';
					selector.describe=req.body.describe? req.body.describe:'false';
					if(selector.procode!='false'&&selector.providerName!='false'&&selector.people!='false'&&selector.phone!='false'&&selector.address!='false'&&selector.fax!='false'&&selector.describe!='false'){
					mongo('add','supplier',selector,function(data){
						console.log(data)
						if(data.result.n==1){
							res.send({'sucess':'注册成功'})
						}else{
							res.send({'err':'注册失败'})
						}
					})
				}else{
					res.send({'err':'格式不正确'})
				}
			})
			}
		})
	}else if(req.query.action=='showPro'){
		mongo('find','supplier',null,function(data){
			res.send(data)
		})
	}else if(req.query.action=='del'){
		mongo('deleted','supplier',{tokenId:req.body.tokenId},function(data){
			if(data.result.n==1){
				var selector=[{tokenId:{$gt:parseInt(req.body.tokenId)}},{$inc:{tokenId:-1}}];
				mongo('updateMany','supplier',selector,function(data){
          res.send({success:"删除成功"})
        })
      }else{
       res.send({'err':"删除失败"})
      }
		})
	}else if(req.query.action=='update'){
		var selector=[
			{procode:req.body.procode},
			{
				$set:{
					procode:req.body.procode,
					providerName:req.body.providerName,
					people:req.body.people,
					phone:req.body.phone,
					address:req.body.address,
					fax:req.body.fax,
					describe:req.body.describe,
				}
			}
		];
		if(req.body.procode&&req.body.providerName&&req.body.people&&req.body.phone&&req.body.address&&req.body.fax&&req.body.describe){
			mongo('updateOne','supplier',selector,function(data){
				if(data.result.n==1){
					res.send({'success':'更新成功'})
				}else{
					res.send({'err':'更新失败'})
				}
			})
		}else{
			res.send({'err':'请检查所有必填项是否填写完毕'})
		}
	}else if(req.query.action=='prosearch'){
//		console.log(req.body)
		var selector={
			providerName:req.body.providerName
		}
		for(x in selector){
			if(selector[x]==""||selector==null){
				delete selector[x]
			}
		}
		console.log(selector)
		mongo('find','supplier',selector,function(data){
			if(data.length>0){
				res.send({success:'查询成功',data:data})
			}else{
				res.send({'err':'没有查询到符合的条件'})
			}
		})
	}
})
router.post('/user',function(req,res){
	console.log(req.body)
	if(req.query.action=='addUser'){
		if(req.body.userpassword==req.body.userRemi){
			mongo('find','user',{userId:req.body.userId},function(data){
			if(data.length>0){
				res.send({err:"编码不能重复"})
			}else{
			mongo('find','user',null,function(data){
				var selector={};
				var date=new Date
				selector.tokenId=data.length+1;
				selector.userId=req.body.userId? req.body.userId:'false';
				selector.userName=req.body.userName? req.body.userName:'false';
				var md5=crypto.createHash('md5');
	       selector.userpassword=md5.update(req.body.userpassword).digest('base64');
	       var md52=crypto.createHash('md5');
				selector.userRemi=md52.update(req.body.userRemi).digest('base64');
				selector.sex=req.body.sex? req.body.sex:'false';
				selector.birth=req.body.birth? req.body.birth:'false';
				selector.age=date.getFullYear()-parseInt(req.body.birth.substring(0,4))
				selector.userphone=req.body.userphone? req.body.userphone:'false';
				selector.userAddress=req.body.userAddress? req.body.userAddress:'false';
				selector.userlei=req.body.userlei? req.body.userlei:'false';
				if(selector.userId!='false'&&selector.userName!='false'&&selector.userpassword!='false'&&selector.userRemi!='false'&&selector.sex!='false'&&selector.birth!='false'&&selector.userphone!='false'&&selector.userAddress!='false'&&selector.userlei!='false'){
					mongo('add','user',selector,function(data){
						console.log(data)
						if(data.result.n==1){
							res.send({'success':'注册成功'})
						}else{
							res.send({'err':'注册失败'})
						}
					})
				}else{
					res.send({'err':'格式不正确'})
				}
			})
			}
		})
		}else{
			res.send({'err':'两次输入的密码需相等'})
		}
	}else if(req.query.action=='showUser'){
		mongo('find','user',null,function(data){
			res.send(data)
		})
	}else if(req.query.action=='del'){
		mongo('deleted','user',{tokenId:req.body.tokenId},function(data){
			if(data.result.n==1){
				var selector=[{tokenId:{$gt:parseInt(req.body.tokenId)}},{$inc:{tokenId:-1}}];
				mongo('updateMany','user',selector,function(data){
          res.send({success:"删除成功"})
        })
      }else{
       res.send({'err':"删除失败"})
      }
		})
	}else if(req.query.action=='update'){
		console.log(111111111111)
		console.log(req.body)
		var selector=[
			{userId:req.body.userId},
			{
				$set:{
					userName:req.body.userName,
					sex:req.body.sex,
					birth:req.body.birth,
					userphone:req.body.userphone,
					userAddress:req.body.userAddress,
					userlei:req.body.userlei
				}
			}
		];
		if(req.body.userName&&req.body.sex&&req.body.birth&&req.body.userphone&&req.body.userAddress&&req.body.userlei){
			mongo('updateOne','user',selector,function(data){
				if(data.result.n==1){
					res.send({'success':'更新成功'})
				}else{
					res.send({'err':'更新失败'})
				}
			})
		}else{
			res.send({'err':'请检查所有必填项是否填写完毕'})
		}
	}else if(req.query.action=='ussearch'){
//		console.log(req.body)
		var selector={
			userName:req.body.userName
		}
		for(x in selector){
			if(selector[x]==""||selector==null){
				delete selector[x]
			}
		}
		console.log(selector)
		mongo('find','user',selector,function(data){
			if(data.length>0){
				res.send({success:'查询成功',data:data})
			}else{
				res.send({'err':'没有查询到符合的条件'})
			}
		})
	}
})
router.post('/logining',function(req,res){
console.log(req.body)
	if(req.query.action=='login'){
		var md51=crypto.createHash('md5');
		var password=md51.update(req.body.userpassword).digest('base64');
		 mongo('find','user',{userId:req.body.userId,userpassword:password},function(data){
      if(data.length==0){
        res.send({err:"账号或者密码错误"})
      }else{
        req.session.user.userId=req.body.userId;
        req.session.user.password=password;
        req.session.user.id=data[0]._id;
        res.send({'success':"登录成功"})
      }
    })
	}else if(req.query.action=='returnUserinfor'){
		console.log(req.session.user)
		if(req.session.user.userId==''){
			res.send({'err':'你还没有登录'})
		}else{
			mongo('find','user',{userId:req.session.user.userId},function(data){
//				console.log(data)
				res.send({'success':'登录成功',data:data})
			})
		}
	}else if(req.query.action=='change'){
		var Md5=crypto.createHash('md5');
		var oldPassword=Md5.update(req.body.oldPassword).digest('base64');
		var MD51=crypto.createHash('md5');
		var newPassword=MD51.update(req.body.newPassword).digest('base64');
		if(oldPassword==req.session.user.password){
			if(newPassword!=req.session.user.password){
				var selector=[
					{userId:req.session.user.userId},
					{
						$set:{userpassword:newPassword}
					}
				]
				mongo('updateOne','user',selector,function(data){
					console.log(data)
					if(data.result.n==1){
	          res.send({'success':'修改成功,请重新登录'})
	        }else{
	          res.send({'err':'修改失败'})
	        }
				})
			}else{
				res.send({'err':"新密码与旧密码相同"})
			}
		}else{
			res.send({'err':'密码错误'})
		}
	}else if(req.query.action=='quit'){
    if(req.session.user){
      req.session.user={};
      res.send({success:"退出成功"})
    }else{
      res.send({err:"没有登录"})
    }
  }
})
module.exports = router;
