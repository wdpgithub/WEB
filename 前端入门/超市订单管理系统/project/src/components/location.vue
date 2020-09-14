<template>
	<div>
		<div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>账单管理页面</span>
        </div>
	</div>
</template>

<script>
	import loc from './location'
	export default{
		components:{
			loc
		}
	}
</script>

<style scoped="scoped">
	.location{
	    height: 30px;
	    line-height: 30px;
	    border: 1px solid #e6eaf6;
	    border-radius: 8px;
	    background: linear-gradient(to bottom, #fefefe,#ffffff,#f6fafd);
	    color: #4a4a4a;
	    padding-left: 30px;
	}
	.location strong{
	    background: url("../assets/home.png") 0 center no-repeat;
	    display: inline-block;
	    padding-left: 30px;
	}
	.location span{
	    color: #2179a9;
	    font-weight:  bold;
	}
</style>