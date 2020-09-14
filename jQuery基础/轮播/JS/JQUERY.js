$(function () {
	var ulli_with;//申明一个获取最大父级宽度的变量

	$(".slider ul li").each(function (index) {
		//通过index获取li的索引值，从0开始数
		index += 1;//避免从0开始数，手动+1变成个数
		ulli_with = $(".slider ul li").width();
		//将第二行的变量赋值为li的宽度
		$(".slider ul").width(ulli_with * index);
		//将ul的宽度:设置成li的宽度乘以li的个数
	})
	var html = "";//页面渲染，
	for (var i = 0; i < $(".slider ul li").length; i++) {
		//通过获取轮播的个数，来动态设置ol下的li个数
		var bianliang = Number(i + 1)
		//因为从0开始计算，所以要+1并且进行数字转换
		html += "<li>" + bianliang + "</li>"
	}
	$(".slider ol").html(html);//ol页面动态插入li
	var geshu = $(".slider ol li").length//获取轮播以及ol 下的li的个数


	// 由于ol设置为绝对，left:50%，想要居中在父级容器下，需要margin-left：负的一般ol宽度的数值
	var olwidth = geshu * 30 / 2
	//因为ol下的li宽度是30px，所以是乘以30在除以2
	$(".slider ol").css("margin-left", -olwidth + "px")


	var index = 0;
	//自动循环轮播的函数

	$(".slider ol li:eq(0)").addClass("black");
	function atuol() {
		index++;
		if (index == geshu) {
			//geshu由20行获取
			index = 0
		}
		var numb = -ulli_with * index;
		//ulli_with为li轮播容器的宽度,Index为索引值

		$(".slider ul").animate({ "margin-left": numb }, 1000)

		$(".slider ol li:eq(" + index + ")").addClass("black").siblings().removeClass("black")
	}

	function calba() {
		clearInterval(time)
		var numb = -ulli_with * index;
		$(".slider ul").animate({ "margin-left": numb }, 1000)
		time = setInterval(atuol, 3000)
	}

	var time = null;//以防万一，先定义一个null的time变量
	time = setInterval(atuol, 3000)//事件赋予


	$(".next").click(function () {

		index++;
		if (index == geshu) {
			index = 0
		}
		$(".slider ol li:eq(" + index + ")").addClass("black").siblings().removeClass("black")
		calba()//47行的代码

	})
	$(".pre").click(function () {

		index--;

		if (index < 0) {
			index = geshu - 1
		}
		$(".slider ol li:eq(" + index + ")").addClass("black").siblings().removeClass("black")
		calba()//47行的代码
	})

	$(".slider ol li").click(function () {
		clearInterval(time)
		index = $(this).index();
		var numb = -ulli_with * index;
		//var index=index;
		$(this).addClass("black").siblings().removeClass("black")
		$(".slider ul").animate({ "margin-left": numb }, 1000)
		time = setInterval(atuol, 3000)
	})

})
