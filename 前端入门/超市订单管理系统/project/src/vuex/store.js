import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex);
import axios from 'axios'
var showbill=function(){
	axios({
		url:'/VueHandler/bill?action=showBill',
		method:'post',
		data:{}
	}).then(function(response){
//		console.log(response.data)
		state.billInfor=response.data
	})
};
var showpro=function(){
	axios({
		url:'/VueHandler/provider?action=showPro',
		method:'post',
		data:{}
	}).then(function(response){
//		console.log(response.data)
		state.proInfor=response.data
	})
};
var showuser=function(){
	axios({
		url:'/VueHandler/user?action=showUser',
		method:'post',
		data:{}
	}).then(function(response){
//		console.log(response.data)
		state.userInfor=response.data
	})
};
var state={
	//账单管理
	billInfor:'',
	showAddlist:false,
	returnBillinfor:false,
	showBillInfor:showbill,
	singlebillInfor:{},
	showUpdate:false,
	
	//供应商管理
	proInfor:'',
	showProInfor:showpro,
	showproUpdate:false,
	returnProinfor:false,
	singleProInfor:{},
	showproAddlist:false,
	
	//用户管理
	userInfor:'',
	showUserInfor:showuser,
	showuserUpdate:false,
	returnUserinfor:false,
	singleUserInfor:{},
	showuserAddlist:false
}
var mutations={
	//账单管理
	showAdd(state,n){
		state.showAddlist=n
	},
	returnBill(state,n){
		state.returnBillinfor=n.isShow;
		state.singlebillInfor.code=n.data.code;
		state.singlebillInfor.shopName=n.data.shopName;
		state.singlebillInfor.unit=n.data.unit;
		state.singlebillInfor.Num=n.data.Num;
		state.singlebillInfor.sum=n.data.sum;
		state.singlebillInfor.business=n.data.business;
		state.singlebillInfor.isPay=n.data.isPay 
	},
	billInforback(state,n){
		state.returnBillinfor=n
	},
	updateBill(state,n){
		state.showUpdate=n.isShow;
		state.singlebillInfor.code=n.data.code;
		state.singlebillInfor.shopName=n.data.shopName;
		state.singlebillInfor.unit=n.data.unit;
		state.singlebillInfor.Num=n.data.Num;
		state.singlebillInfor.sum=n.data.sum;
		state.singlebillInfor.business=n.data.business;
		state.singlebillInfor.isPay=n.data.isPay ;
	},
	updateBack(state,n){
		state.showUpdate=n
	},
	billsearch(state,n){
		state.billInfor=n
	},
	
	//供应商管理
	showproAdd(state,n){
		state.showproAddlist=n
	},
	returnPro(state,n){
		state.returnProinfor=n.isShow;
		state.singleProInfor.procode=n.data.procode;
		state.singleProInfor.providerName=n.data.providerName;
		state.singleProInfor.people=n.data.people;
		state.singleProInfor.phone=n.data.phone;
		state.singleProInfor.address=n.data.address;
		state.singleProInfor.fax=n.data.fax;
		state.singleProInfor.describe=n.data.describe;
		console.log(state.singleProInfor)
	},
	proInforback(state,n){
		state.returnProinfor=n
	},
	updatePro(state,n){
		state.showproUpdate=n.isShow;
		state.singleProInfor.procode=n.data.procode;
		state.singleProInfor.providerName=n.data.providerName;
		state.singleProInfor.people=n.data.people;
		state.singleProInfor.phone=n.data.phone;
		state.singleProInfor.address=n.data.address;
		state.singleProInfor.fax=n.data.fax;
		state.singleProInfor.describe=n.data.describe  
	},
	proUpdateBack(state,n){
		state.showproUpdate=n
	},
	providersearch(state,n){
		state.proInfor=n
	},
	
	//用户管理
	showuserAdd(state,n){
		state.showuserAddlist=n
	},
	returnUser(state,n){
		state.returnUserinfor=n.isShow;
		state.singleUserInfor.userId=n.data.userId;
		state.singleUserInfor.userName=n.data.userName;
		state.singleUserInfor.userpassword=n.data.userpassword;
		state.singleUserInfor.userRemi=n.data.userRemi;
		state.singleUserInfor.sex=n.data.sex;
		state.singleUserInfor.birth=n.data.birth;
		state.singleUserInfor.userphone=n.data.userphone;
		state.singleUserInfor.userAddress=n.data.userAddress;
		state.singleUserInfor.userlei=n.data.userlei;
		
		console.log(state.singleUserInfor)
	},
	userInforback(state,n){
		state.returnUserinfor=n
	},
	updateUser(state,n){
		state.showuserUpdate=n.isShow;
		state.singleUserInfor.userId=n.data.userId;
		state.singleUserInfor.userName=n.data.userName;
		state.singleUserInfor.userpassword=n.data.userpassword;
		state.singleUserInfor.userRemi=n.data.userRemi;
		state.singleUserInfor.sex=n.data.sex;
		state.singleUserInfor.birth=n.data.birth;
		state.singleUserInfor.userphone=n.data.userphone;
		state.singleUserInfor.userAddress=n.data.userAddress;
		state.singleUserInfor.userlei=n.data.userlei;  
	},
	userUpdateBack(state,n){
		state.showuserUpdate=n
	},
	usersearch(state,n){
		state.userInfor=n
	}
}
export default new Vuex.Store({
	state,mutations
})
