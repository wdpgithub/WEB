<template>
	<div>
		<div class="right">
        <div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>账单管理页面 >> 订单添加页面</span>
        </div>
        <div class="providerAdd">
            <form action="#">
                <!--div的class 为error是验证错误，ok是验证成功-->
                <div class="">
                    <label for="providerId">订单编码：</label>
                    <input type="text" readonly="readonly" name="providerId" id="providerId" v-model="billView.listCode"/>
                    <!--<p>{{billView.listCode}}</p>-->
                    <span>*</span>
                </div>
                <div>
                    <label for="providerName">商品名称：</label>
                    <input type="text" name="providerName" id="providerName" v-model="billView.brand"/>
                    <span >*</span>
                </div>
                <div>
                    <label for="people">商品单位：</label>
                    <input type="text" name="people" id="people" v-model="billView.unite"/>
                    <span>*</span>

                </div>
                <div>
                    <label for="phone">商品数量：</label>
                    <input type="text" name="phone" id="phone" v-model="billView.num"/>
                    <span>*</span>
                </div>
                <div>
                    <label for="address">总金额：</label>
                    <input type="text" name="address" id="address" v-model="billView.totalPrice"/>
                    <span>*</span>
                </div>
                <div>
                    <label for="fax">供应商：</label>
                    <input type="text" name="fax" id="fax" v-model="billView.factory"/>
                    <span>*</span>
                </div>
                <div>
                    <label >是否付款：</label>
                    <input type="radio" name="zhifu" v-model="billView.isPay" value="未付款"/>未付款
                    <input type="radio" name="zhifu" v-model="billView.isPay" value="已付款"/>已付款
                </div>
                <div class="providerAddBtn">
                    <!--<a href="#">保存</a>-->
                    <!--<a href="billList.html">返回</a>-->
                    <input type="button" value="保存" @click="billupdate"/>
                    <input type="button" value="返回" @click="getBack"/>
                </div>
            </form>
        </div>

    </div>
	</div>
</template>

<script>
	import store from '@/vuex/store.js'
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		computed:{
			...mapState(['billView'])
		},
		methods:{
			getBack(){
//				window.location.href='#/index',
				this.$router.push({path:'/index'})
			},
			billupdate(){
				var _this=this;
				this.$axios({
					method:'post',
					url:'/vueHandler/bill?action=billupdate',
					data:{
						listCode:_this.billView.listCode,
						brand:_this.billView.brand,
						num:_this.billView.num,
						totalPrice:_this.billView.totalPrice,
						factory:_this.billView.factory,
						isPay:_this.billView.isPay,
						unite:_this.billView.unite
					}
				}).then(function(res){
					console.log(_this.billView.listCode)
					if(res.data.success){
						window.location.href='#/index'
					}else{
						alert('更新失败')
					}
				})
			}
		}
	}
</script>

<style>
</style>