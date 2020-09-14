import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import bgCanvas from '@/components/bgCanvas'
import infor from '@/components/infor'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      component: demo
    },
    {
      path: '/bgCanvas',
      component: bgCanvas
    },
    {
      path:'/infor',
      component:infor
    }
  ]
})
