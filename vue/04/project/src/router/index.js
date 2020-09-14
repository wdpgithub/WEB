//引入vue.js
import Vue from 'vue'
//引入vue-router.js
import Router from 'vue-router'
//引入helloworld组件
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import shop from '@/components/shop'
//加载路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/index',redirect:'/index/shop'},
    {
      path:'/index',
      component:index,
      children:[
        {path:'shop',
        component:shop}
      ]
    }
  ]
})
