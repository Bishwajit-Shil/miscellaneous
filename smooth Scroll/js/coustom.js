$('#menu a').smoothScroll({

	speed: 1000,
	offset: -100
});



$('.tol').smoothScroll({
	speed: 2000
});



$(window).scroll(function(){

	var top = $(window).scrollTop();

	console.log(top);

	if(top>300){
		$('.tol').fadeIn(500);
	}else{
		$('.tol').fadeOut(500);
	}
});