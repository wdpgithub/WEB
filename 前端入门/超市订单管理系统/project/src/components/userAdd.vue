<template>
	<div>
		<div class="providerAdd">
            <form action="#">
                <!--div的class 为error是验证错误，ok是验证成功-->
                <div class="">
                    <label for="userId">用户编码：</label>
                    <input type="text" name="userId" id="userId" ref="userId"/>
                    <span>*请输入用户编码，且不能重复</span>
                </div>
                <div>
                    <label for="userName">用户名称：</label>
                    <input type="text" name="userName" id="userName" ref="userName"/>
                    <span >*请输入用户名称</span>
                </div>
                <div>
                    <label for="userpassword">用户密码：</label>
                    <input type="text" name="userpassword" id="userpassword" ref="userpassword"/>
                    <span>*密码长度必须大于6位小于20位</span>

                </div>
                <div>
                    <label for="userRemi">确认密码：</label>
                    <input type="text" name="userRemi" id="userRemi" ref="userRemi"/>
                    <span>*请输入确认密码</span>
                </div>
                <div>
                    <label >用户性别：</label>

                    <select name="" v-model="sex">
                        <option>男</option>
                        <option>女</option>
                    </select>
                    <span></span>
                </div>
                <div>
                    <label for="data">出生日期：</label>
                    <input type="text" name="data" id="data" ref="birth"/>
                    <span >*如1900-01-01</span>
                </div>
                <div>
                    <label for="userphone">用户电话：</label>
                    <input type="text" name="userphone" id="userphone" ref="userphone"/>
                    <span >*</span>
                </div>
                <div>
                    <label for="userAddress">用户地址：</label>
                    <input type="text" name="userAddress" id="userAddress" ref="userAddress"/>
                </div>
                <div>
                    <label >用户类别：</label>
                    <input type="radio" name="userlei" v-model="userlei" value="管理员"/>管理员
                    <input type="radio" name="userlei" v-model="userlei" value="经理"/>经理
                    <input type="radio" name="userlei" v-model="userlei" value="普通用户"/>普通用户

                </div>
                <div class="providerAddBtn">
                    <!--<a href="#">保存</a>-->
                    <!--<a href="userList.html">返回</a>-->
                    <input type="button" value="保存" @click="addUser"/>
                    <input type="button" value="返回" @click="showuserAdd(false)"/>
                </div>
            </form>
        </div>
	</div>
</template>

<script>
	import store from "@/vuex/store.js"
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		data(){
			return{
				sex:'',
				userlei:''
			}
		},
		computed:{
			...mapState(['showUserInfor'],'showuserAddlist')
		},
		methods:{
			...mapMutations(['showuserAdd']),
			addUser(){
				var userId=this.$refs.userId.value;
				var userName=this.$refs.userName.value;
				var userpassword=this.$refs.userpassword.value;
				var userRemi=this.$refs.userRemi.value;
				var sex=this.sex;
				var birth=this.$refs.birth.value;
				var userphone=this.$refs.userphone.value;
				var userAddress=this.$refs.userAddress.value;
				var userlei=this.userlei;
				var _this=this
				this.$axios({
					url:'/VueHandler/user?action=addUser',
					method:'post',
					data:{
						userId:userId,
						userName:userName,
						userpassword:userpassword,
						userRemi:userRemi,
						sex:sex,
						birth:birth,
						userphone:userphone,
						userAddress:userAddress,
						userlei:userlei
					}
				}).then(function(response){
					console.log(response)
					if(response.data.success){
						_this.$store.state.showUserInfor();
						_this.showuserAdd(false)
					}else{
						alert(response.data.err)
					}
					
				})
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
	
	.providerAdd form {
	
	}
	
	.providerAdd div {
	    margin-top: 12px;
	    margin-bottom: 12px;
	}
	
	.providerAdd label {
	    width: 200px;
	    display: inline-block;
	    text-align: right;
	}
	
	.providerAdd input ,.providerAdd select{
	    width: 260px;
	    height: 30px;
	    line-height: 30px;
	    border-radius: 4px;
	    outline: none;
	    padding-left: 10px;
	    border: 1px solid #4987c0;
	    box-shadow: 1px 1px 1px #99afc4;
	}
	
	.providerAdd input:focus,.providerAdd select:focus {
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
	
	.providerAddBtn a ,
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
	.providerAddBtn input[type='submit']:focus{
	    background: linear-gradient(to bottom, #7aaed4, #578bb4, #406e99, #225792, #0d2d54);
	}
	
	.providerAdd input[type='radio']{
	    width: 20px;
	    height: 14px;
	    line-height:12px;
	    border-radius: 4px;
	    outline: none;
	    padding-left: 10px;
	    border: none;
	    box-shadow: none;
	}
</style>