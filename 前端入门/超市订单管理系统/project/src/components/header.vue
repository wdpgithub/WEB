<template>
	<div>
		<div class="publicHeader">
	        <h1>超市账单管理系统</h1>
	        <div class="publicHeaderR">
	            <p><span>下午好！</span><span style="color: #fff21b"> {{name}}</span> , 欢迎你！</p>
	            <a @click="quit">退出</a>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'请登录'
			}
		},
		mounted(){
			var _this=this
			this.$axios({
				url:'/VueHandler/logining?action=returnUserinfor',
				method:'post',
			}).then(function(response){
				console.log(response)
				if(response.data.success){
					_this.name=response.data.data[0].userName
				}else{
					alert(response.data.err);
//					window.location.href='#/'
				}
			})
		},
		methods:{
			quit(){
				this.$axios({
					url:'/VueHandler/logining?action=quit',
					method:'post',
				}).then(function(response){
					if(response.data.success){
						alert(response.data.success)
						window.location.href='#/'
					}else{
						alert(response.data.err)
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.publicHeader{
	    height: 48px;
	    line-height: 48px;
	    font-size: 14px;
	    background: linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	    background:-webkit-linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	    background:-moz-linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	    background:-ms-linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	}
	.publicHeader h1{
	    float: left;
	    color: #fff;
	    font-size: 22px;
	    padding-left:80px;
	    text-shadow: 2px 1px #000;
	    background: url("../assets/buy.png") 30px center no-repeat;
	
	}
	.publicHeaderR{
	    float: right;
	    color: #fff;
	    margin-right: 50px;
	
	}
	.publicHeaderR p{
	    display: inline-block;
	    font-weight: bold;
	}
	.publicHeaderR a{
	    width: 50px;
	    height: 28px;
	    display: inline-block;
	    border: 1px solid #679e43;
	    background: linear-gradient(to bottom,#baf076,#a2d866,#9cd055,#8dc838,#8bc93a);
	    line-height: 28px;
	    text-align: center;
	    border-radius: 4px;
	    font-weight: bold;
	    color: #fff;
	
	}
	.publicHeaderR a:hover,.publicHeaderR a:active{
	    border: 1px solid #192b02;
	    border-radius: 4px;
	    font-weight: bold;
	    background: linear-gradient(to bottom,#70b21c,#5c9613,#47740e,#3b6209,#2b4906);
	}
</style>