<template>
    <div>
        <ul>
            <li v-for='v in arr'>{{v.name}}</li>
        </ul>
    </div> 
</template>
<script>
export default {
  data() {
    return {
      arr: ""
    };
  },
  mounted() {
    var _this = this;
    this.$axios({
      url: "/node/find",
      methods: "get",
      params: {}
      // methods:"post",
      // data:{

      // }
    }).then(function(res) {
      _this.arr = res.data;
      console.log(res);
    });
  }
};
</script>
<style>
</style>
