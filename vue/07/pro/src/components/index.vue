<template>
	<div>
		<my-header></my-header>
		<tips></tips>
		<section class="publicMian">
		<index-left></index-left>
		<div style="width: 100%;">
			<router-view></router-view>
		</div>
		</section>
	</div>
</template>

<script>
	import myHeader from './header'
	import tips from './tips'
	import indexLeft from './indexLeft'
	export default{
		components:{
			myHeader,
			tips,
			indexLeft
		}
	}
</script>

<style>
.publicMian{
    border-top: 1px solid #c2ccd5;
    display: flex;  /*变为弹性盒模型*/
    display: -webkit-flex;
    background: #fff;
}
</style>