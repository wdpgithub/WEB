<template>
	<div>
		<div class="right">
        <div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>账单管理页面 >> 信息查看</span>
        </div>
        <div class="providerView">
            <p><strong>订单编号：</strong><span>{{billView.listCode}}</span></p>
            <p><strong>商品名称：</strong><span>{{billView.brand}}</span></p>
            <p><strong>商品单位：</strong><span>{{billView.unite}}</span></p>
            <p><strong>商品数量：</strong><span>{{billView.num}}</span></p>
            <p><strong>总金额：</strong><span>{{billView.totalPrice}}</span></p>
            <p><strong>供应商：</strong><span>{{billView.factory}}</span></p>
            <p><strong>是否付款：</strong><span>{{billView.isPay}}</span></p>

            <a href="#/index" @click="clear">返回</a>
        </div>
    </div>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		computed:{
			...mapState(['billView'])
		},
		methods:{
			...mapMutations(['clear'])
		}
	}
</script>

<style>
</style>