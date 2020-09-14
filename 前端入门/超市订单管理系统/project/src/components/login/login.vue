<template>
	<div>
		<bg></bg>
		<div class="login">
			<h2 class="title">超市管理系统</h2>
			<p><span>用户编码：</span><input type="text" placeholder="请输入用户编码" ref="userId"/></p>
			<div style="clear: both;"></div>
			<p><span>密码：</span><input type="password" placeholder="请输入密码" ref="userpassword"/></p>
			<div style="clear: both;"></div>
			<input type="text" class="check_veri" ref="veri" /><div class="veri"><veri ref="chengeveri"></veri></div>
			<div style="clear: both;"></div>
			<button class="sub" @click="login">登录</button>
		</div>
	</div>
</template>

<script>
	import bg from './bg'
	import veri from './verification'
	export default{
		components:{
			bg,
			veri
		},
		methods:{
			login(){
				var userId=this.$refs.userId.value;
				var userpassword=this.$refs.userpassword.value;
				var veri=this.$refs.veri.value;
				console.log(veri)
				var _this=this;
				this.$axios({
					url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
					method:'get',
					params:{
						veri:veri
					}
				}).then(function(response){
					if(response.data.success){
						_this.$axios({
						url:'/VueHandler/logining?action=login',
						method:'post',
						data:{
							userId:userId,
							userpassword:userpassword
						}
						}).then(function(response){
							console.log(response)
							if(response.data.success){
								alert(response.data.success)
								window.location.href='#/home'
							}else{
								alert(response.data.err)
							}
							
						})
					}else{
						alert(response.data.err)
						_this.$refs.chengeveri.changeVeri()
					}
				})
//				
//				this.
			}
		}
	}
</script>

<style scoped="scoped">
	.login{
		width: 350px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		background: rgb(141, 143, 182,0.4);
		color: white;
		/*z-index: 2;*/
		margin-top: 175px;
	}
	.title{
		text-align: center;
		margin-top: 20px;
	}
	p{
		margin-top: 20px;
	}
	span{
		display: block;
		width: 70px;
		float: left;
		line-height: 30px;
		margin-left: 40px;
		text-align: right;
	}
	input{
		float: left;
		height: 30px;
		outline: none;
	}
	.check_veri{
		width: 96px;
		height: 33px;
		margin-left: 68px;
		margin-top: 20px;
	}
	.veri{
		float: left;
		margin-left: 15px;
		margin-top: 20px;
	}
	.sub{
		display: block;
		width: 100px;
		height: 35px;
		margin: 20px auto;
		outline: none;
		border: 0;
		background: rgb(152, 251, 152,0.4);
	}
</style>