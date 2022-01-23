$(document).ready(function(){
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
});