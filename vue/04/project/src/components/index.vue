<template>
    <div>
        <h2>{{msg}}</h2>
        <header-wrap></header-wrap>
        <router-view></router-view>
    </div>
</template>
<script>
import headerWrap from "./header";
export default {
  components: {
    headerWrap:headerWrap
  },

  data() {
    return {
      msg: "我是首页"
    };
  }
};
</script>

<style>
</style>
