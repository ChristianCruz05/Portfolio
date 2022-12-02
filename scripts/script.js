
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

$( document ).ready(function() {
	console.log("FIRE");
    Swal.fire({
  	text: 'Click the neon name to watch my Video Resume',
 	icon: 'info',
	toast: 'true',
	position: 'top',
	color: '#CCC5B9',
	iconColor: '#E18937',
	background: '#403D39',
	timer: "4000",
	timerProgressBar: 'true',
	width: '30rem',
	confirmButtonColor: '#335C67'
})
});



