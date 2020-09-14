<template>
  <div>
    <button @click="$store.commit('demo2','你好')">父传子</button>
    <p>{{$store.state.ms1}}</p>
    <com></com>
  </div>
</template>

<script>
import com from "./com.vue";
import  store from '@/vuex/store.js'
export default {
  store,
  name: "HelloWorld",
  components:{
    com
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    demo(){
      this.$store.state.ms1="nihao"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
