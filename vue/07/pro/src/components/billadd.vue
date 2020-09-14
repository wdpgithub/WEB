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
                    <label for="billId">订单编码：</label>
                    <input type="text" name="billId" class="listCode" id="billId" required/>
                    <span>*请输入订单编码</span>
                </div>
                <div>
                    <label for="billName">商品名称：</label>
                    <input type="text" name="billName" class="brand" id="billName" required/>
                    <span >*请输入商品名称</span>
                </div>
                <div>
                    <label for="billCom">商品单位：</label>
                    <input type="text" name="billCom" id="billCom" class="unite" required/>
                    <span>*请输入商品单位</span>

                </div>
                <div>
                    <label for="billNum">商品数量：</label>
                    <input type="text" name="billNum" class="num" id="billNum" required/>
                    <span>*请输入大于0的正自然数，小数点后保留2位</span>
                </div>
                <div>
                    <label for="money">总金额：</label>
                    <input type="text" name="money" class="totalPrice" id="money" required/>
                    <span>*请输入大于0的正自然数，小数点后保留2位</span>
                </div>
                <div>
                    <label >供应商：</label>
                    <select name="supplier" v-model="factory">
                        <option>--请选择相应的提供商--</option>
                        <option>北京市粮油总公司</option>
                        <option>邯郸市五得利面粉厂</option>

                    </select>
                    <span>*请选择供应商</span>
                </div>
                <div>
                    <label >是否付款：</label>
                    <input type="radio" name="zhifu" v-model='isPay' value="未付款"/>未付款
                    <input type="radio" name="zhifu" v-model='isPay' value="已付款"/>已付款
                </div>
                <div class="providerAddBtn">
                    <!--<a href="#">保存</a>-->
                    <!--<a href="billList.html">返回</a>-->
                    <input type="button" value="保存" @click="addList"/>
                    <input type="button" value="返回" />
                </div>
            </form>
        </div>

    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				factory:'',
				isPay:''
			}
		},
		methods:{
			addList(){
				var _this=this;
				this.$axios({
					url:'/vueHandler/shopht?action=addList',
					method:'post',
					data:{
						listCode:$('.listCode').val(),
						brand:$('.brand').val(),
						unite:$('.unite').val(),
						num:$('.num').val(),
						totalPrice:$('.totalPrice').val(),
						factory:_this.factory,
						isPay:_this.isPay
					}
				}).then(function(res){
//					console.log(res)
					if(res.data.success){
						window.location.href='#/index/billList'
					}else{
						alert('请检查是否输入正确')
					}
				})
			}
		}
	}
</script>

<style>
</style>