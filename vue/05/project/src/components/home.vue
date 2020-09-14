<template>
	<div>
		<router-link :to="{path:'/home/shop',query:{id:1}}">产品1</router-link>
		<router-link :to="{path:'/home/shop',query:{id:2}}">产品2</router-link>
		<router-link :to="{path:'/home/shop',query:{id:3}}">产品3</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	
};
</script>

<style>
</style>