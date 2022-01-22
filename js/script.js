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

	var typed = new Typed(".typing", {
		strings: ["شرفتك نحو الاستشارات الاحترافية والخدمات المتكاملة في مواضيع المحاسبة والزكاة والضريبة"],
		smartBackspace: false,
		typeSpeed: 50,
		startDelay: 5600,
	});

	$(document).ready(function() {
		setTimeout(function() {
			$(".show-btn").css("visibility", "visible");
		}, 12300);
	});

});
$(document).ready(function() {
	$(".skitter-large").skitter({
		controls:true,
		// focus:true,
		interval:3500,
		numbers:true,
		dots:false,
		progressbar:true,
		progressbar_css:{background:"var(--main)"},
		theme:"square",
	});
});

$(document).ready(function() {
	$(".skitter-large2").skitter({
		controls:true,
		// focus:true,
		interval:3500,
		numbers:true,
		dots:false,
		progressbar:true,
		progressbar_css:{background:"var(--main)"},
		theme:"square",
	});
});
