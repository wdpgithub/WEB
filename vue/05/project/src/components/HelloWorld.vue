<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <button @click="index">index</button>
    <router-link to='/index'>index</router-link>
    <a href="#/index">index</a>
    <router-link to='/home'>home</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	index(){
//		window.location.href='#/index?id=1'
      this.$router.push({path:'/index',query:{id:1}})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
