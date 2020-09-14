<template>
	<div>
		<my-header></my-header>
		<tags></tags>
		<menus></menus>
		<div class="footer"> </div>
	</div>
</template>

<script>
	import myHeader from './header'
	import tags from './tags'
	import menus from './menu'
	export default{
		components:{
			myHeader,
			tags,
			menus
		}
	}
</script>

<style scoped="scoped">
	.footer{
	    width: 100%;
	  	height: 65px;
	    background: linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	    background:-webkit-linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	    background:-moz-linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	    background:-ms-linear-gradient(to bottom,#60acf0,#64a5df,#62a0dd,#5994d6,#4f8ace,#4880ca);
	}
</style>