<template>
	<div>
		<div class="providerView">
            <p><strong>订单编号：</strong><span>{{singlebillInfor.code}}</span></p>
            <p><strong>商品名称：</strong><span>{{singlebillInfor.shopName}}</span></p>
            <p><strong>商品单位：</strong><span>{{singlebillInfor.unit}}</span></p>
            <p><strong>商品数量：</strong><span>{{singlebillInfor.Num}}</span></p>
            <p><strong>总金额：</strong><span>{{singlebillInfor.sum}}</span></p>
            <p><strong>供应商：</strong><span>{{singlebillInfor.business}}</span></p>
            <p><strong>是否付款：</strong><span>{{singlebillInfor.isPay}}</span></p>
            <a @click="billInforback(false)">返回</a>
        </div>
	</div>
</template>

<script>
	import store from "@/vuex/store"
	import {mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['singlebillInfor'])
		},
		methods:{
			...mapMutations(['returnBill','billInforback'])
		}
	}
</script>

<style scoped="scoped">
	.providerView {
	    margin: 20px 0;
	    font-size: 18px;
	    line-height: 30px;
	    padding-top: 30px;
	    border: 1px dashed #3d4f1b;
	}
	
	.providerView strong {
	    display: inline-block;
	    width: 200px;
	    text-align: right;
	}
	
	.providerView span {
	    color: #bd644e;
	}
	
	.providerView a {
	    margin-left: 520px;
	    position: relative;
	    top: 60px;
	}
</style>