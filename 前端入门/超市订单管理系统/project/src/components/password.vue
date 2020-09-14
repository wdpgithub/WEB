<template>
	<div>
		<loc></loc>
		<div class="providerAdd">
			<form action="#">
				<!--div的class 为error是验证错误，ok是验证成功-->
				<div class="">
					<label for="oldPassword">旧密码：</label>
					<input type="password" name="oldPassword" id="oldPassword" ref="oldPassword"/>
					<span>*请输入原密码</span>
				</div>
				<div>
					<label for="newPassword">新密码：</label>
					<input type="password" name="newPassword" id="newPassword" ref="newPassword"/>
					<span>*请输入新密码</span>
				</div>
				<div>
					<label for="reNewPassword">确认新密码：</label>
					<input type="password" name="reNewPassword" id="reNewPassword" ref="reNewPassword"/>
					<span>*请输入新确认密码，保证和新密码一致</span>
				</div>
				<div class="providerAddBtn">
					<!--<a href="#">保存</a>-->
					<input type="button" value="保存" @click="change" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import loc from './location'
	export default{
		components:{
			loc
		},
		methods:{
			change(){
				var oldPassword=this.$refs.oldPassword.value;
				var newPassword=this.$refs.newPassword.value;
				var reNewPassword=this.$refs.reNewPassword.value;
				if(newPassword==reNewPassword){
					this.$axios({
						url:'/VueHandler/logining?action=change',
						method:'post',
						data:{
							oldPassword:oldPassword,
							newPassword:newPassword,
							reNewPassword:reNewPassword
						}
					}).then(function(response){
						if(response.data.success){
							alert(response.data.success)
							window.location.href='#/'
						}else{
							alert(response.data.err)
						}
					})
				}else{
					alert('两次输入的密码不同')
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.providerAdd {
		border: 1px solid #9ac70f;
		padding: 20px;
		margin: 20px;
	}
	
	.providerAdd form {}
	
	.providerAdd div {
		margin-top: 12px;
		margin-bottom: 12px;
	}
	
	.providerAdd label {
		width: 200px;
		display: inline-block;
		text-align: right;
	}
	
	.providerAdd input,
	.providerAdd select {
		width: 260px;
		height: 30px;
		line-height: 30px;
		border-radius: 4px;
		outline: none;
		padding-left: 10px;
		border: 1px solid #4987c0;
		box-shadow: 1px 1px 1px #99afc4;
	}
	
	.providerAdd input:focus,
	.providerAdd select:focus {
		border: 1px solid #0e56a8;
		background: rgba(238, 236, 240, 0.2);
		-webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
		-moz-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
		box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
	}
	
	.providerAdd span {
		margin-left: 20px;
		color: #faca0d;
	}
	/*验证错误*/
	
	.providerAdd .error span {
		color: red;
	}
	
	.providerAdd .error input {
		border: 1px solid red;
	}
	/*验证成功*/
	
	.providerAdd .ok span {
		color: green;
	}
	
	.providerAdd .ok input {
		border: 1px solid green;
	}
	
	.providerAddBtn {
		margin-left: 240px;
		padding-top: 20px;
	}
	
	.providerAddBtn a,
	.providerAddBtn input[type='submit'],
	.providerAddBtn input[type='button'] {
		display: inline-block;
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 4px;
		border: transparent;
		background: linear-gradient(to bottom, #85c0ec, #6aa7d6, #508dc6, #306fb4, #17559e);
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		font-size: 14px;
		vertical-align: top;
	}
	
	.providerAddBtn a:active,
	.providerAddBtn a:focus,
	.providerAddBtn a:hover,
	.providerAddBtn input[type='submit']:hover,
	.providerAddBtn input[type='submit']:focus {
		background: linear-gradient(to bottom, #7aaed4, #578bb4, #406e99, #225792, #0d2d54);
	}
	
	.providerAdd input[type='radio'] {
		width: 20px;
		height: 14px;
		line-height: 12px;
		border-radius: 4px;
		outline: none;
		padding-left: 10px;
		border: none;
		box-shadow: none;
	}
</style>