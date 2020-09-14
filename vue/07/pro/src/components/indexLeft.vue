<template>
	<div>
		<div class="left">
			<h2 class="leftH2"><span class="span1"></span>功能列表 <span></span></h2>
			<nav>
				<ul class="list">
					<li>
						<a href="#/index/billList">账单管理</a>
					</li>
					<li class="active">
						<a href="#">供应商管理</a>
					</li>
					<li>
						<a href="#">用户管理</a>
					</li>
					<li>
						<a href="#">密码修改</a>
					</li>
					<li>
						<a href="#">退出系统</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			$('.list li').click(function(){
				$(this).addClass('active').siblings().removeClass('active')
			})
		}
	}
</script>

<style>
/*左边*/
.left{
    width: 168px;
    background: url("../assets/leftBg.png") 0 0 repeat-y;
    margin-right: 10px;
    /*height: 520px;*/
    min-height: 520px;

}
.leftH2{
    width: 140px;
    height: 30px;
    border-radius: 4px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: #60b3e7;
    margin: 10px  auto;
    box-shadow:4px 4px rgba(212,212,212,0.7);
}
.leftH2 span{
    width: 10px;
    height: 10px;
    display: inline-block;
    background: radial-gradient(#70c2f4,#3a8dc1, #035384, #4696c7,#83d1f5);
    border-radius: 50%;
}
.span1{
    margin-right: 10px;
}
.span2{
    margin-left: 12px;
}

.list{
    margin: 0 20px;
    font-weight: bold;
}
.list li{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(212,212,212,0.5) ;
}
.list li:nth-child(1){
    background: url("../assets/zd.png") 0  center no-repeat;
}
.list li:nth-child(2){
    background: url("../assets/gys.png") 0  center no-repeat;
}
.list li:nth-child(3){
    background: url("../assets/yh.png") 0  center no-repeat;
}
.list li:nth-child(4){
    background: url("../assets/mm.png") 0  center no-repeat;
}
.list li:nth-child(5){
    background: url("../assets/tc.png") 0  center no-repeat;
}
.list li:hover{
    background-color: #acd5f5;
    border-radius: 4px;
}
.list li.active{
    background-color: #92c609;
    border-radius: 4px;
}
.list a{
    color: #0042a8;
    display: inline-block;
    padding-left: 40px;
    width: 90%;
}
</style>