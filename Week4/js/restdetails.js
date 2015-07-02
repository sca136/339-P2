$(document).ready ( function() {

	$("div.menu").click( function(e) { 
		e.preventDefault();
		console.log("blockedd");

		/*$(this).next("ul").removeClass("hide");
		console.log("hide");*/

		if ($(this).next("div").hasClass("hide") ) {
			console.log("Event cancelled (it was raining)");
			$(this).next("div").removeClass("hide");
		} else {
			$(this).next("div").addClass("hide");
		}
	});


	$("div.menu-items-hidden").click( function(){
		$(this).addClass("hide");
	});

	


});