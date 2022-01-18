$(document).ready(function(){
	$(".custom a").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	});
});
