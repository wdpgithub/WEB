import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios'
vue.use(vuex);

//存放公共的数据
var state={
	billList:{
		data:[],
		getData:function(){
			axios({
				url:'/vueHandler/shopht?action=billList',
				method:'get',
				params:{
					brand:'',
					factory:'',
					isPay:''
				}
			}).then(function(res){
//				console.log(res);
                state.billList.data=[]
				if(res.data.err){
					console.log('未查询到数据')
				}else{
					state.billList.data=res.data
				}
			})
		}
	},
	billView:{}
}
//存放公共的方法用于修改state里面的数据
var mutations={
	sendView(state,n){
		state.billView={
			listCode:n.listCode,
			brand:n.brand,
			unite:n.unite,
			num:n.num,
			totalPrice:n.totalPrice,
			factory:n.factory,
			isPay:n.isPay
		}
	},
	clear(state){
		state.billView={}
	}
}
export default new vuex.Store({
	state,
	mutations
})
