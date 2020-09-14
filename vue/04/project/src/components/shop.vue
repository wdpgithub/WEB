<template>
    <div>
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ["1", "2", "3", "4", "5","6"]
    };
  },

  computed: {
    msg() {
        console.log(this.$route);
        //this.$router:获取路由地址的信息
        var index;
        if(!this.$route.query.id){
            index=0
        }else{
            index = parseInt(this.$route.query.id) - 1;
        }
      return this.arr[index];
    }
  }
};
</script>
<style>
</style>
