// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'

//Vue.config.productionTip = false
//引入axios模块
import axios from 'axios';
//允许跨域的时候携带cookie
axios.defaults.withCredentials=true;
//引入画布插件
import vueParticles from 'vue-particles'
//加载画布插件
import $ from 'jquery'


Vue.use(vueParticles)
//把axios赋给Vue
Vue.prototype.$axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//components: { App },
//template: '<App/>'
})
