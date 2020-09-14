<template>
	<div class="content">
		<loc></loc>
		<div>
			<div class="search">
				<span>商品名称：</span>
				<input type="text" placeholder="请输入商品的名称" v-model="searchInfor.shopName"/>
				<span>供应商：</span>
				<select name="tigong" v-model="searchInfor.business">
					<option value="">--请选择--</option>
					<option>北京市粮油总公司</option>
					<option>邯郸市五得利面粉厂</option>
				</select>
	
				<span>是否付款：</span>
				<select name="fukuan" v-model="searchInfor.isPay">
					<option value="">--请选择--</option>
					<option>已付款</option>
					<option>未付款</option>
				</select>
	
				<input type="button" value="查询" @click="search"/>
				<a @click="showAdd(true)">添加订单</a>
			</div>
			<!--账单表格 样式和供应商公用-->
			<table class="providerTable" cellpadding="0" cellspacing="0">
				<tr class="firstTr">
					<th width="10%">账单编码</th>
					<th width="20%">商品名称</th>
					<th width="10%">供应商</th>
					<th width="10%">账单金额</th>
					<th width="10%">是否付款</th>
					<th width="10%">创建时间</th>
					<th width="30%">操作</th>
				</tr>
				<tr v-for="i in list">
					<td>{{i.code}}</td>
					<td>{{i.shopName}}</td>
					<td>{{i.business}}</td>
					<td>{{i.sum}}</td>
					<td>{{i.isPay}}</td>
					<td>2015-11-12</td>
					<td>
						<a @click="returnBill({isShow:true,data:i})"><img src="../assets/read.png" alt="查看" title="查看" /></a>
						<a @click="updateBill({isShow:true,data:i})"><img src="../assets/xiugai.png" alt="修改" title="修改" /></a>
						<a class="removeBill" @click="del(i)"><img src="../assets/schu.png" alt="删除" title="删除" /></a>
					</td>
				</tr>
			</table>
		</div>
		<div :style="mask" v-if="showAddlist">
			<bill-add></bill-add>
		</div>
		<div :style="mask" v-if="returnBillinfor">
			<bill-view></bill-view>
		</div>
		<div :style="mask" v-if="showUpdate">
			<bill-update></bill-update>
		</div>
	</div>
</template>

<script>
	var date=new Date()
	import loc from './location'
	import billAdd from './billadd'
	import billView from './billcheckinfor'
	import billUpdate from './billupdate'
	import store from '@/vuex/store.js'
	import {mapState,mapMutations} from 'vuex'
	
	export default{
		store,
		components:{
			loc,
			billAdd,
			billView,
			billUpdate
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
				searchInfor:{
					shopName:'',
					business:'',
					isPay:''
				}
			}
		},
		methods:{
			...mapMutations(['showAdd','returnBill','updateBill','billsearch']),
			del(i){
				var _this=this;
				this.$axios({
					url:'/VueHandler/bill?action=del',
					method:'post',
					data:{
						tokenId:i.tokenId
					}
				}).then(function(result){
					_this.$store.state.showBillInfor()
				})
			},
			search(){
				var shopName=this.searchInfor.shopName;
				var business=this.searchInfor.business;
				var isPay=this.searchInfor.isPay;
				var _this=this;
				this.$axios({
					url:'/VueHandler/bill?action=search',
					method:'post',
					data:{
						shopName:shopName,
						business:business,
						isPay:isPay
					}
				}).then(function(response){
					console.log(response)
						if(response.data.success){
							_this.billsearch(response.data.data);
						}else{
							alert(response.data.err)
						}
					})
			}
		},
		computed:{
			...mapState(['showAddlist','returnBillinfor','showBillInfor','billInfor','showUpdate']),
			list(){
				return this.billInfor
			}
		},
		mounted(){
			this.$store.state.showBillInfor()
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