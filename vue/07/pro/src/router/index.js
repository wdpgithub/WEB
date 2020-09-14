import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import index from '@/components/index'
import billList from '@/components/billList'
import billadd from '@/components/billadd'
import billView from '@/components/billView'
import billUpdate from '@/components/billUpdate'
import passmodefiy from '@/components/passmodefiy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    //只要我们访问'/index' 重新设置我们的访问的路径为'/index/billList'
    {path:'/index',redirect:'/index/billList'},
    {
    	path:'/index',
    	component:index,
    	children:[
    	{path:'billList',component:billList},
    	{path:'billadd',component:billadd},
    	{path:'billView',component:billView},
    	{path:'billUpdate',component:billUpdate},
    	{path:'passmodefiy',component:passmodefiy}
    	]
    }
  ]
})
