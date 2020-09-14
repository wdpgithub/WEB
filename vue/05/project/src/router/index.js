import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import home from '@/components/home'
import shop from '@/components/shop'
Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {path:'/home',redirect:'/home/shop'},
    {
      path: '/home',
      component:home,
      children:[
      {path:'shop',component:shop}
      ]
    },
    
  ]
})
