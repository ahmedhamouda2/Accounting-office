$(document).ready(function(){
	$(".custom a").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	});
	// $( ".image-last" ).hover(
	// 	function() {
	// 		$('.image-left-center').hide();
	// 	}, function() {
	// 		$('.image-left-center').show();
	// 	}
	//   );
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
});
