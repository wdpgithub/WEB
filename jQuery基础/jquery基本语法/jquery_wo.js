$(function(){
//			$(".text").text("该来的总要来的")
//			document.getElementsByClassName("text").innerText=""
			var i=0;
			$(".btn01").click(function(){
				
				i++;
				if(i%2){
					$(".text").html("<h1 style='color:green'>该来的总要来的</h1>")
				}else{
					$(".text").text("asdsadsadsad")
				}
				
				
				
			})
			$("#of").mousemove(function(e){
				$(".text").text("x:"+e.offsetX+"y:"+e.offsetY)
			})
			$(".hover").hover(function(){
				$(this).css("background","yellow")
			},function(){
				$(this).css("background","red")
			})
			
			$(".of").blur(function(){
				console.log("李坤远永远上不了王者")
			})
		})

		jQuery(document).ready(function(){
		  jQuery(".of").focus(function(){
		  	console.log("李坤远")
		  });
});