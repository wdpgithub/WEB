// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import axios from 'axios'
Vue.prototype.$axios=axios
axios.defaults.withCredentials=true;//允许跨域的时候携带cookie
import $ from 'jquery'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
