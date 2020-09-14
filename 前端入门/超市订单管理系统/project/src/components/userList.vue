<template>
	<div class="content">
		<loc></loc>
		<div>
			<div class="search">
				<span>用户名：</span>
				<input type="text" placeholder="请输入用户名" v-model="usesearchInfor.userName"/>
				<input type="button" value="查询" @click="ussearch"/>
				<a @click="showuserAdd(true)">添加用户</a>
			</div>
			<!--用户-->
			<table class="providerTable" cellpadding="0" cellspacing="0">
				<tr class="firstTr">
					<th width="10%">用户编码</th>
					<th width="20%">用户名称</th>
					<th width="10%">性别</th>
					<th width="10%">年龄</th>
					<th width="10%">电话</th>
					<th width="10%">用户类型</th>
					<th width="30%">操作</th>
				</tr>
				<tr v-for="i in list">
					<td>{{i.userId}}</td>
					<td>{{i.userName}}</td>
					<td>{{i.sex}}</td>
					<td>{{i.age}}</td>
					<td>{{i.userphone}}</td>
					<td>{{i.userlei}}</td>
					<td>
						<a  @click="returnUser({isShow:true,data:i})"><img src="../assets/read.png" alt="查看" title="查看" /></a>
						<a @click="updateUser({isShow:true,data:i})"><img src="../assets/xiugai.png" alt="修改" title="修改" /></a>
						<a @click="del(i)" class="removeUser"><img src="../assets/schu.png" alt="删除" title="删除" /></a>
					</td>
				</tr>
			</table>
		</div>
		<div :style="mask" v-if="showuserAddlist">
			<user-add></user-add>
		</div>
		<div :style="mask" v-if="returnUserinfor">
			<user-view></user-view>
		</div>
		<div :style="mask" v-if="showuserUpdate">
			<user-update></user-update>
		</div>
	</div>
</template>

<script>
	import loc from './location'
	import userAdd from './userAdd'
	import userView from './userView'
	import userUpdate from './userUpdate'
	import store from '@/vuex/store.js'
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		components:{
			loc,
			userAdd,
			userView,
			userUpdate
		},
		data(){
			return{
				mask:{
					width:'100%',
					height:'auto',
					background:'white',
					minHeight:'490px',
					position:'absolute',
					top:'30px',
					left:0
				},
				usesearchInfor:{
					userName:''
				}
			}
		},
		methods:{
			...mapMutations(['showuserAdd','returnUser','updateUser','usersearch']),
			del(i){
				var _this=this;
				this.$axios({
					url:'/VueHandler/user?action=del',
					method:'post',
					data:{
						tokenId:i.tokenId
					}
				}).then(function(result){
					_this.$store.state.showUserInfor()
				})
			},
			ussearch(){
				var userName=this.usesearchInfor.userName;
				var _this=this;
				this.$axios({
					url:'/VueHandler/user?action=ussearch',
					method:'post',
					data:{
						userName:userName
					}
				}).then(function(response){
//					console.log(response)
					if(response.data.success){
						_this.usersearch(response.data.data);
					}else{
						alert(response.data.err)
					}
				})
			}

		},
		computed:{
			...mapState(['showuserAddlist','returnUserinfor','showUserInfor','userInfor','showuserUpdate']),
			list(){
				return this.userInfor
			}
		},
		mounted(){
			this.$store.state.showUserInfor()
		}
	}
</script>

<style scoped="scoped">
	.content{
		position: relative;
		overflow-y: scroll;
		height: 520px;
	}
	.search {
		height: 50px;
		line-height: 50px;
		background: #f6fafd;
		padding-left: 24px;
		color: #000;
	}
	.search input[type='text'] {
		width: 200px;
		height: 30px;
		outline: none;
		padding-left: 10px;
		border: 1px solid #8ab2d5;
		border-radius: 4px;
	}
	.search input[type='button'] {
		margin-left: 20px;
		width: 100px;
		padding: 0 20px;
		height: 30px;
		border: 1px solid #7ba92c;
		border-radius: 4px;
		color: #fff;
		font-weight: bold;
		background: #87c212 url("../assets/search.png") 10px center no-repeat;
	}
	.search input[type='button']:focus {
		outline: none;
		background-color: #5d8410;
	}
	.search a {
		width: 80px;
		padding-left: 40px;
		float: right;
		margin: 10px 60px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #0c89de;
		border-radius: 4px;
		color: #fff;
		font-weight: bold;
		background: #47acf1 url("../assets/tianjia.png") 10px center no-repeat;
		display: inline-block;
	}
	.search a:hover,.search a:active{
	    background-color: #0778c5;
	}
	.search span {
		margin-left: 10px;
	}
	.search select {
		margin: 10px;
		width: 100px;
		height: 30px;
		border-radius: 4px;
		border: 1px solid #0c89de;
		outline: none;
	}
	.providerTable {
		width: 100%;
		border: 1px solid #ccc;
	}
	.providerTable tr {
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	.providerTable tr:nth-child(odd) {
		background: #f6f7f9;
	}
	.providerTable tr:hover {
		background: #e9f9ca;
	}
	.firstTr {
		border: 1px solid #d6dfe6;
		background: linear-gradient(to bottom, #f3f8fc, #ebf4f9, #e3f1fa, #e0f0fd, #d8e9fd);
	}
	.firstTr th {
		border-right: 2px solid rgba(209, 218, 223, 0.4);
	}
	.providerTable td a {
		margin-top: 10px;
		display: inline-block;
		margin-right: 10px;
	}
</style>