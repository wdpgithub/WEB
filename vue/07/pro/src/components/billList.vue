<template>
	<div>
		<div class="right">
			<div class="location">
				<strong>你现在所在的位置是:</strong>
				<span>账单管理页面</span>
			</div>
			<div class="search">
				<span>商品名称：</span>
				<input type="text" v-model="brand" placeholder="请输入商品的名称" />

				<span>供应商：</span>
				<select name="tigong" v-model="factory">
					<option>--请选择--</option>
					<option>北京市粮油总公司</option>
					<option>邯郸市五得利面粉厂</option>
				</select>

				<span>是否付款：</span>
				<select name="fukuan" v-model='isPay'>
					<option>--请选择--</option>
					<option>已付款</option>
					<option>未付款</option>
				</select>

				<input type="button" @click="search" value="查询" />
				<a href="#/index/billadd">添加订单</a>
				<!--<router-link to='/index/billadd'>添加订单</router-link>-->
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
				<tr v-for="(v,i) in billList.data" v-if="!billList.data.length==0">
					<td>{{v.listCode}}</td>
					<td>{{v.brand}}</td>
					<td>{{v.factory}}</td>
					<td>{{v.totalPrice}}</td>
					<td>{{v.isPay}}</td>
					<td>2015-11-12</td>
					<td>
						<a href="#/index/billView" @click="sendView(v)"><img src="../assets/read.png" alt="查看" title="查看" /></a>
						<a href="#/index/billUpdate" @click="sendView(v)"><img src="../assets/xiugai.png" alt="修改" title="修改" /></a>
						<a href="#" class="removeBill" @click="del(v)"><img src="../assets/schu.png" alt="删除" title="删除" /></a>
					</td>
				</tr>

			</table>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import { mapState, mapMutations } from 'vuex'
	export default {
		store,
		data() {
			return {
				brand: '',
				factory: '',
				isPay: ''
			}
		},
		computed: {
			...mapState(['billList'])
		},
		methods: {
			...mapMutations(['sendView']),
			search() {
				var _this=this
				this.$axios({
					method: 'get',
					url: '/vueHandler/shopht?action=billList',
					params: {
						brand: _this.brand,
						factory: _this.factory,
						isPay: _this.isPay
					}
				}).then(function(res) {
					_this.billList.data=res.data
				})
			},
			del(v){
				var _this=this
				this.$axios({
					method:'post',
					url:'/vueHandler/shopht?action=del',
					data:{
						listCode:v.listCode
					}
				}).then(function(res){
					console.log(_this.billList.data)
					_this.billList.getData()
				})
			}
		},
		mounted() {
			var _this = this

			this.billList.getData()
		}
	}
</script>

<style>

</style>