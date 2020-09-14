<template>
	<div>
		 <div class="providerView">
            <p><strong>供应商编码：</strong><span>{{singleProInfor.procode}}</span></p>
            <p><strong>供应商名称：</strong><span>{{singleProInfor.providerName}}</span></p>
            <p><strong>联系人：</strong><span>{{singleProInfor.people}}</span></p>
            <p><strong>联系电话：</strong><span>{{singleProInfor.phone}}</span></p>
            <p><strong>传真：</strong><span>{{singleProInfor.fax}}</span></p>
            <p><strong>描述：</strong><span>{{singleProInfor.describe}}</span></p>

            <a @click="proInforback(false)">返回</a>
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
			...mapState(['singleProInfor'])
		},
		methods:{
			...mapMutations(['returnPro','proInforback'])
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