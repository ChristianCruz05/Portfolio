 $('.popup-youtube, .popup-text').magnificPopup({
                     disableOn: 320,
                     type: 'iframe',
                     mainClass: 'mfp-fade',
                     removalDelay: 160,
                     preloader: false,
                     fixedContentPos: true
 });


$('.image-zoom').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
});

$(function(){
    $("#neon-button").toggle();
    $("#neon-button").fadeIn(1200);
})
