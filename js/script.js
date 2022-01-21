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

	var theText = $(".typer").data("text"),
    theTextLength = theText.length,
    n = 0 ,
    theTyper = setInterval(function(){
		$(".typer").each(function(){
			$(this).html($(this).html() + theText[n]);
		});
		n += 1; 
		if(n >= theTextLength){
			clearInterval(theTyper);
		}
    },120);
});
