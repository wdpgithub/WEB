<template>
	<div>
		<div class="providerAdd">
            <form action="#">
                <!--div的class 为error是验证错误，ok是验证成功-->
                <div class="">
                    <label for="providerId">订单编码：</label>

                    <span>*</span>
                </div>
                <div>
                    <label for="providerName">商品名称：</label>
                    <input type="text" name="providerName" ref='shopName' id="providerName" :placeholder="singlebillInfor.shopName"/>
                    <span >*</span>
                </div>
                <div>
                    <label for="people">商品单位：</label>
                    <input type="text" name="people" ref='unit' id="people" :placeholder="singlebillInfor.unit"/>
                    <span>*</span>

                </div>
                <div>
                    <label for="phone">商品数量：</label>
                    <input type="text" name="phone" ref='Num' id="phone" :placeholder="singlebillInfor.Num"/>
                    <span>*</span>
                </div>
                <div>
                    <label for="address">总金额：</label>
                    <input type="text" name="address" ref='sum' id="address" :placeholder="singlebillInfor.sum"/>
                    <span>*</span>
                </div>
                <div>
                    <label for="fax">供应商：</label>
                    <input type="text" name="fax" ref='business' id="fax" :placeholder="singlebillInfor.business"/>
                    <span>*</span>
                </div>
                <div>
                    <label >是否付款：</label>
                    <input type="radio" name="zhifu" checked value="未付款" v-model="isPay"/>未付款
                    <input type="radio" name="zhifu" value="已付款" v-model="isPay"/>已付款
                </div>
                <div class="providerAddBtn">
                    <!--<a href="#">保存</a>-->
                    <!--<a href="billList.html">返回</a>-->
                    <input type="button" value="保存" @click="update"/>
                    <input type="button" value="返回" @click="updateBack(false)"/>
                </div>
            </form>
        </div>
	</div>
</template>

<script>
	import store from '@/vuex/store.js'
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		data(){
			return{
				isPay:''
			}
		},
		computed:{
			...mapState(['singlebillInfor','showBillInfor'])
		},
		methods:{
			...mapMutations(['updateBack']),
			update(){
				var code=this.$refs.code.value;
				var shopName=this.$refs.shopName.value;
				var unit=this.$refs.unit.value;
				var Num=this.$refs.Num.value;
				var sum=this.$refs.sum.value;
				var business=this.$refs.business.value;
				var isPay=this.isPay;
				var _this=this;
				this.$axios({
					url:'/VueHandler/bill?action=update',
					method:'post',
					data:{
						code:code,
						shopName:shopName,
						unit:unit,
						Num:Num,
						sum:sum,
						business:business,
						isPay:isPay
					}
				}).then(function(response){
					console.log(response)
					if(response.data.success){
						_this.updateBack(false);
						_this.showBillInfor()
					}else{
						alert(response.data.err)
					}
					
				}) 
			}
		},
		mounted(){
			this.isPay=this.singlebillInfor.isPay
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