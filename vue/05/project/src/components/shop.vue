<template>
	<div>
		<p>{{msg}}</p>
	</div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["我是产品1", "我是产品2", "我是产品3"]
    };
  },
  computed: {
    msg() {
      var index;
      if (!this.$route.query.id) {
        index = 0;
      } else {
        index = this.$route.query.id - 1;
      }

      console.log(this.$route);
      return this.arr[index];
    }
  }
};
</script>

<style>
</style>