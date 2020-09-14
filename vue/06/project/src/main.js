// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import axios from 'axios'
//允许跨域的时候携带cookie
axios.defaults.withCredentials=true
Vue.prototype.$axios=axios
  
Vue.use(VueParticles)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
})
