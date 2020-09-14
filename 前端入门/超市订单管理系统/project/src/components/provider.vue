<template>
	<div class="content">
		<loc></loc>
		<div>
			<div class="search">
	            <span>供应商名称：</span>
	            <input type="text" placeholder="请输入供应商的名称" v-model="prosearchInfor.providerName"/>
	            <input type="button" value="查询" @click="prosearch"/>
	            <a @click="showproAdd(true)">添加供应商</a>
	        </div>
	        <!--供应商操作表格-->
	        <table class="providerTable" cellpadding="0" cellspacing="0">
	            <tr class="firstTr">
	                <th width="10%">供应商编码</th>
	                <th width="20%">供应商名称</th>
	                <th width="10%">联系人</th>
	                <th width="10%">联系电话</th>
	                <th width="10%">传真</th>
	                <th width="10%">创建时间</th>
	                <th width="30%">操作</th>
	            </tr>
	            <tr v-for="i in list">
	                <td>{{i.procode}}</td>
	                <td>{{i.providerName}}</td>
	                <td>{{i.people}}</td>
	                <td>{{i.phone}}</td>
	                <td>{{i.fax}}</td>
	                <td>2015-11-12</td>
	                <td>
	                    <a @click="returnPro({isShow:true,data:i})"><img src="../assets/read.png" alt="查看" title="查看"/></a>
	                    <a @click="updatePro({isShow:true,data:i})"><img src="../assets/xiugai.png" alt="修改" title="修改"/></a>
	                    <a @click="del(i)" class="removeProvider"><img src="../assets/schu.png" alt="删除" title="删除"/></a>
	                </td>
	            </tr>
	        </table>
		</div>
		<div :style="mask" v-if="showproAddlist">
			<pro-add></pro-add>
		</div>
		<div :style="mask" v-if="returnProinfor">
			<pro-view></pro-view>
		</div>
		<div :style="mask" v-if="showproUpdate">
			<pro-update></pro-update>
		</div>
	</div>
</template>

<script>
	import loc from './location'
	import proAdd from './proadd'
	import proView from './procheckinfor'
	import proUpdate from './proUpdate'
	import store from '@/vuex/store.js'
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		components:{
			loc,
			proAdd,
			proView,
			proUpdate
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
				prosearchInfor:{
					providerName:''
				}
			}
		},
		methods:{
			...mapMutations(['showproAdd','returnPro','updatePro','providersearch']),
			del(i){
				var _this=this;
				this.$axios({
					url:'/VueHandler/provider?action=del',
					method:'post',
					data:{
						tokenId:i.tokenId
					}
				}).then(function(result){
					_this.$store.state.showProInfor()
				})
			},
			prosearch(){
				var providerName=this.prosearchInfor.providerName;
				var _this=this;
				this.$axios({
					url:'/VueHandler/provider?action=prosearch',
					method:'post',
					data:{
						providerName:providerName
					}
				}).then(function(response){
//					console.log(response)
						if(response.data.success){
							_this.providersearch(response.data.data);
						}else{
							alert(response.data.err)
						}
					})
			}
		},
		computed:{
			...mapState(['showproAddlist','returnProinfor','showProInfor','proInfor','showproUpdate']),
			list(){
				return this.proInfor
			}
		},
		mounted(){
			this.$store.state.showProInfor()
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