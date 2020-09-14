import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home'
import billList from '@/components/billList'
import Provider from '@/components/provider'
import userList from '@/components/userList'
import password from '@/components/password'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
     	path:'/home',redirect:'/home/billList'
    },
    {
      path: '/home',
      component: Home,
      children:[
      	{
      		path: 'billList',
     	 		component: billList,	
      	},
      	{
      		path: 'provider',
     	 		component: Provider,	
      	},
      	{
      		path: 'userList',
     	 		component: userList,	
      	},
      	{
      		path: 'password',
     	 		component: password,	
      	}
      ]
    }
  ]
})
