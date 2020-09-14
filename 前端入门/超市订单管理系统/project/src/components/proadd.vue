<template>
	<div>
		<div class="providerAdd">
            <form action="#">
                <!--div的class 为error是验证错误，ok是验证成功-->
                <div class="">
                    <label for="providerId">供应商编码：</label>
                    <input type="text" name="providerId" id="providerId" ref="procode"/>
                    <span>*请输入供应商编码</span>
                </div>
                <div>
                    <label for="providerName">供应商名称：</label>
                    <input type="text" name="providerName" id="providerName" ref="providerName"/>
                    <span >*请输入供应商名称</span>
                </div>
                <div>
                    <label for="people">联系人：</label>
                    <input type="text" name="people" id="people" ref="people"/>
                    <span>*请输入联系人</span>

                </div>
                <div>
                    <label for="phone">联系电话：</label>
                    <input type="text" name="phone" id="phone" ref="phone"/>
                    <span>*请输入联系电话</span>
                </div>
                <div>
                    <label for="address">联系地址：</label>
                    <input type="text" name="address" id="address" ref="address"/>
                    <span></span>
                </div>
                <div>
                    <label for="fax">传真：</label>
                    <input type="text" name="fax" id="fax" ref="fax"/>
                    <span></span>
                </div>
                <div>
                    <label for="describe">描述：</label>
                    <input type="text" name="describe" id="describe" ref="describe"/>
                </div>
                <div class="providerAddBtn">
                    <!--<a href="#">保存</a>-->
                    <!--<a href="providerList.html">返回</a>-->
                    <input type="button" value="保存" @click="addPro"/>
                    <input type="button" value="返回" @click="showproAdd(false)"/>
                </div>
            </form>
        </div>
	</div>
</template>

<script>
	import store from "@/vuex/store.js"
	import {mapState,mapMutations} from 'vuex'
	export default{
		store,
		data(){
			return{
			
				business:''
			}
		},
		computed:{
			...mapState(['showProInfor'],'showproAddlist')
		},
		methods:{
			...mapMutations(['showproAdd']),
			addPro(){
				var procode=this.$refs.procode.value;
				var providerName=this.$refs.providerName.value;
				var people=this.$refs.people.value;
				var phone=this.$refs.phone.value;
				var address=this.$refs.address.value;
				var fax=this.$refs.fax.value;
				var describe=this.$refs.describe.value;
				var _this=this
				this.$axios({
					url:'/VueHandler/provider?action=addpro',
					method:'post',
					data:{
						procode:procode,
						providerName:providerName,
						people:people,
						phone:phone,
						address:address,
						fax:fax,
						describe:describe
					}
				}).then(function(response){
//					if(response.status==200){
						_this.$store.state.showProInfor();
						_this.showproAdd(false)
//					}
					
				})
			}
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