$(function() {
	
	$(window).resize(function() {
		positionElementInPage = $('#menu').offset().top;
	});
	
	$(window).scroll(
		// fonctionne mais avec saccades :-(
	
		function() {
			var PositionMenu 		= $('#menu').offset().top;
			var scrollPosition		= $(window).scrollTop();
			$('nav').removeClass("fixed-bottom");
			console.log("window scrollTOP: "+$(window).scrollTop());
			console.log("PositionMenu: "+PositionMenu);
			if(scrollPosition > PositionMenu) {
				// position fixe en haut
				console.log("> 0 !");
				$('nav').addClass("fixed-top");
			} else {
				// position normale
				$('nav').removeClass("fixed-top");
				console.log("remove fixed-top");
			}
			//    
		}
	);
});