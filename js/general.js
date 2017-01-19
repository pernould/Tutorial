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
			if(scrollPosition > PositionMenu) {
				// position fixe en haut
				$('nav').addClass("fixed-top");
			} else {
				// position normale
				$('nav').removeClass("fixed-top");
			}
			//    
		}
	);
});