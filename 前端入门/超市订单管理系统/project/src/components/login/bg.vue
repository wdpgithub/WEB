<template>
	<div>
		<vue-particles
        color="#F3ED28"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="4"
        linesColor="#F3ED28"
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
				
			}
		}
	}
</script>

<style scoped="scoped">
#particles-js{
	/*#particles-js是vue-particles的默认ID,可以通过此id名给他添加属性*/
	width: 100%;
	height: 100%;
	background: #171E3A;
	position: fixed;
}
</style>