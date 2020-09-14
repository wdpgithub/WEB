<template>
	<div>
		<!--时间-->
		<section class="publicTime">
		    <span id="time">{{time}}</span>
		    <a href="#">温馨提示：为了能正常浏览，请使用高版本浏览器！（IE10+）</a>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				time:''
			}
		},
		methods:{
			returnTime(){
				var _this=this
				setInterval(_this.currentTime,1000)
			},
			currentTime(){
				var _this=this
				var date=new Date();
					var week=date.getDay();
					switch (week){
						case 0:
						week='星期日'
							break;
						case 1:
						week='星期一'
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
					}
					var hour=date.getHours();
					if(hour<10){
						hour='0'+hour
					}
					var minute=date.getMinutes();
					if(minute<10){
						minute='0'+minute
					}
					var sec=date.getSeconds();
					if(sec<10){
						sec='0'+sec
					}
					_this.time=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日 '+hour+':'+minute+':'+sec+' '+week
			}
		},
		mounted(){
			this.currentTime()
			this.returnTime()
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