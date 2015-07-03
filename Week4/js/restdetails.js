$(document).ready ( function() {

	var res = 0;

	$("div.menu").click( function(e) { 
		e.preventDefault();
		console.log("blockedd");

		/*$(this).next("ul").removeClass("hide");
		console.log("hide");*/

		if ($(this).next("div").hasClass("hide") ) {
			console.log("Event cancelled (it was raining)");
			$(this).next("div").removeClass("hide");
			$(this).next("div").animate({
				top: "0px"
			}, 50);
		} else {
			$(this).next("div").addClass("hide");
		}
	});



	/*$('.menu').animate({
      left: "-285px"
    }, 200);*/


	$("div.menu-items-hidden").click( function(){
		$(this).addClass("hide");
		$(this).animate({
			top:"-50px"
		}, 50);
	});


	$("div.submit-nav2").click( function(e) {
		e.preventDefault();
		console.log("woo hoo");

		res = 1;
		console.log(res);

		if(res >= 1){
			$("a.button-nav-res").removeClass("hide");
			/*$("a.button-nav-res").animate({
				left:"0em"
			}, 300);*/
		}
	});

	$("a.button-nav-res").click( function(e) {
		e.preventDefault();
		$("div.cart-items").removeClass("hide");
	});

	$("div.cart-items").click( function(e) {
		e.preventDefault();
		$(this).addClass("hide");
	});

	$("a.button").click( function(e) {
		e.preventDefault();
		$("div.cart-items").addClass("hide");
		$("a.button-nav-res").addClass("hide");
	});

/*	$(window).click( function() {
		$("div.cart-items").addClass("hide");
	});*/


	


});