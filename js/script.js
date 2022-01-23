$(document).ready(function(){
	$(".custom a").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	});
	$(window).scroll(function(){
		if($(window).scrollTop() == 0 ){
			$('.block').addClass("active").siblings().removeClass("active");
		}
		var scrollToTop = $(".scroll-top");
		if ($(window).scrollTop() >= 1000) {
			scrollToTop.fadeIn(300);
		} else{
			scrollToTop.fadeOut(300);
		}
		scrollToTop.click(function(event){
		event.preventDefault();
			$("html,body").stop().animate({scrollTop:0},100)
		});
	});

	$(document).ready(function() {
		setTimeout(function() {
			$(".show-btn").css("visibility", "visible");
		}, 12300);
	});

});
