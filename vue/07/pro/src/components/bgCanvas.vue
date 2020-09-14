<template>
	<div :style="bgCanvas">
		<vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bgCanvas:{
					width:window.innerWidth+'px',
					height:window.innerHeight+'px',
					overflow:'hidden'
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#particles-js{
		background: #0D1953;
	}
	
	
</style>