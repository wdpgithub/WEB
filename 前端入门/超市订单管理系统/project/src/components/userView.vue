<template>
	<div>
		<div class="providerView">
            <p><strong>用户编号：</strong><span>{{singleUserInfor.userId}}</span></p>
            <p><strong>用户名称：</strong><span>{{singleUserInfor.userName}}</span></p>
            <p><strong>用户性别：</strong><span>{{singleUserInfor.sex}}</span></p>
            <p><strong>出生日期：</strong><span>{{singleUserInfor.birth}}</span></p>
            <p><strong>用户电话：</strong><span>{{singleUserInfor.userphone}}</span></p>
            <p><strong>用户地址：</strong><span>{{singleUserInfor.userAddress}}</span></p>
            <p><strong>用户类别：</strong><span>{{singleUserInfor.userlei}}</span></p>

            <a @click="userInforback(false)">返回</a>
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
			...mapState(['singleUserInfor'])
		},
		methods:{
			...mapMutations(['returnUser','userInforback'])
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