<template>
	<div>
		<div class="publicTime">
	        <span id="time">{{time}}</span>
	        <a href="#">温馨提示：为了能正常浏览，请使用高版本浏览器！（IE8+）</a>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				time:""
			}
		},
		mounted(){
			var _this=this
			function myTime(){
				var date=new Date();
				var week=date.getDay();
				switch(week){
				case 1:
				week='星期一';
				break;
				case 2:
				week='星期二'
				break;
				case 3:
				week='星期三'
				break;
				case 4:
				week='星期四'
				break;
				case 5:
				week='星期五'
				break;
				case 6:
				week='星期六'
				break;
				case 0:
				week='星期日'
				break;
			};
			var hour=date.getHours();
			if (hour<10){
				hour='0'+hour
			};
			var min=date.getMinutes();
			if(min<10){
				min='0'+min
			};
			_this.time=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+' '+hour+':'+min+' '+week
			}
			myTime()
			setInterval(myTime,1000)
		}
	}
</script>

<style scoped="scoped">
	.publicTime{
	    height: 28px;
	    line-height: 28px;
	    font-size: 12px;
	    background: linear-gradient(to bottom,#f5f9f8,#eef2fb,#e2ecf5,#e2ecf5,#e0edf6);
	    padding-left: 20px;
	    color: #808589;
	}
	#time{
	    float: left;
	    background: url("../assets/time.png") 0 center no-repeat;
	    padding-left: 26px;
	}
	.publicTime a{
	    float: right;
	    margin-right: 50px;
	    color: #626367;
	}
</style>