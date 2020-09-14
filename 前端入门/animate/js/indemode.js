$(function() {

	$("#gototop").click(function() {
		$('body,html').animate({
				scrollTop: 0
			},
			800); //点击回到顶部按钮，缓懂回到顶部,数字越小越快
	})

})

function gofloor(e) {

	var nowtop = $(".main").eq(e - 1).offset().top;

	$(".fixed ul li").eq(e - 1).addClass("active").siblings().removeClass("active");

	$('body,html').animate({
			scrollTop: nowtop
		},
		800); //点击回到顶部按钮，缓懂回到顶部,数字越小越快
}

$(window).scroll(function() {
	var top = $(window).scrollTop();
	// console.log(top);

	//	 $(".main").each(function(index){
	//	 	console.log($(".main").eq(index).offset().top);
	//	 	
	//	 })
	var list = [];
	
	var lengthn = $(".main").length;
	for(var i = 0; i < lengthn; i++) {
		list.push($(".main").eq(i).offset().top);
		if(top >= list[i]) {
			$(".fixed ul li").eq(i).addClass("active").siblings().removeClass("active");
		}
	}


})