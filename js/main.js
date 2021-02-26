/* -----------------------------------------------
					Js Main
--------------------------------------------------

    Template Name: Baha - Personal Portfolio Template
    Author: Malyarchuk
    Copyright: 2019

--------------------------------------------------

Table of Content

	1. Preloader
	2. Sound Start
	3. Isotope Portfolio Setup
	4. Blogs Masonry Setup
	5. Active Current Link
	6. Mobile Toggle Click Setup
	7. Testimonials OwlCarousel
	8. Chart Setup
	9. Portfolio Tilt Setup
	10. Portfolio Image Link
	11. Portfolio Video Link
	12. Blog Video Link
	13. Validate Contact Form
	14. Google Map

----------------------------------- */

$(window).on('load', function() {
		
	/* -----------------------------------
				1. Preloader
	----------------------------------- */
	$("#preloader").delay(1000).addClass('loaded');
	
	/* -----------------------------------
			  2. Sound Setup
	----------------------------------- */
	$('body').append('<audio loop autoplay volume="1" id="audio-player"><source src="music.mp3" type="audio/mpeg"></audio>');
    	var audio = document.getElementById("audio-player");
    	audio.volume = 0.2;
	
	if($(window).length) {
		$('.music-bg').css({'visibility':'visible'});
		$('body').addClass("audio-on");
		if ($('body').hasClass('audio-off')) {
        	$('body').removeClass('audio-on');
		} 
		$(".music-bg").on('click', function() {
			$('body').toggleClass("audio-on audio-off");         
			if ($('body').hasClass('audio-off')) {
				audio.pause();
			} 
			if ($('body').hasClass('audio-on')) {
				audio.play();
			}
		});
	}
	
	/* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
    if( $('.portfolio-items').length ) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }
	
	/* -----------------------------------
			4. Blogs Masonry Setup
	----------------------------------- */
    $('.blog-masonry').isotope({ layoutMode: 'moduloColumns' });
	
});

$(document).ready(function() {
    "use strict";
    
    
    /* -----------------------------------
			4. Blogs Masonry Setup
	----------------------------------- */
    $('.medium-masonry').isotope({ layoutMode: 'moduloColumns' });
	
});

$(document).ready(function() {
    "use strict";
	
	/* -----------------------------------
			5. Active Current Link
	----------------------------------- */
    $('.header-main ul li a').on('click',function() {
        if($('.header-main.on').length) {
            $('.header-main').removeClass('on');
        }
    });
	
	/* -----------------------------------
		6. Mobile Toggle Click Setup
	----------------------------------- */
    $('.header-toggle').on('click', function() {
        $('.header-main').toggleClass('on');
    });
	
	/* -----------------------------------
	      7. Testimonials OwlCarousel
	----------------------------------- */
	$(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
	
	/* -----------------------------------
	      	8. Chart Setup
	----------------------------------- */
	if ($('.chart').length > 0) {
	    $('.chart').easyPieChart({
          trackColor:'#0e0f10',
	      scaleColor:false,
	      easing: 'easeOutBounce',
	      scaleLength: 4,
	      lineCap: 'square',
	      lineWidth:5,
	      size:130,
	      animate: {
	                duration: 2500,
	                enabled: true
	    	}
	 	});
	 }
	
	/* -----------------------------------
	      	9. Portfolio Tilt Setup
	----------------------------------- */
    $('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });
	
	/* -----------------------------------
	      10. Portfolio Image Link
	----------------------------------- */
	$(".portfolio-items .image-link").magnificPopup({
		type: "image"
	});
	
	/* -----------------------------------
	      11. Portfolio Video Link
	----------------------------------- */
	$(".portfolio-items .video-link").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	      12. Blog Video Link
	----------------------------------- */
	$(".pt-blog .blog-item .thumbnail .btn-play").magnificPopup({
		type: "iframe"
	});
	
    
    /* -----------------------------------
	      12. Blog Video Link
	----------------------------------- */
	$(".pt-medium .medium-item .thumbnail .btn-play").magnificPopup({
		type: "iframe"
	});
	
    
    
	/* -----------------------------------
	    13. Validate Contact Form
	----------------------------------- */
	// if ($("#myform").length) {
    //     $("#myform").validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },

    //             email: "required",
				
    //         },

    //         messages: {
    //             name: "Please enter your name",
    //             email: "Please enter your email address"
    //         },

            
    //         submitHandler: function (form) {
    //             $.ajax({
    //                 type: "POST",
    //                 url: "/modernPort/mail.js",
    //                 success: function () {
    //                     $( "#loader").hide();
    //                     $( "#success").slideDown( "slow" );
    //                     setTimeout(function() {
    //                     $( "#success").slideUp( "slow" );
    //                     }, 3000);
    //                     form.reset();
    //                 },
    //                 error: function() {
    //                     $( "#loader").hide();
    //                     $( "#error").slideDown( "slow" );
    //                     setTimeout(function() {
    //                     $( "#error").slideUp( "slow" );
    //                     }, 3000);
    //                 }
    //             });
    //             return false;
    //         }

    //     });
    // }
	
	/* Google Map Setup */
    if($('#map').length) {
        initMap();
     };

});

/* -----------------------------------
  		14. Google Map
----------------------------------- */
function initMap() {
    var latitude = $("#map").data('latitude'),
        longitude = $("#map").data('longitude'),
        zoom = $("#map").data('zoom'),
        cordinates = new google.maps.LatLng(latitude, longitude);

    var styles = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}];
	
        var mapOptions = {
        zoom: zoom,
        center: cordinates,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: styles
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: cordinates,
        map: map,
        title: "We are here!"
    });
}


// Footer

/*var isPop = false;

function animateButton() {
  if (isPop == 0) {
    document.getElementById("btn1").style.transform =
      "translateX(-62px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateX(-124px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateX(-186px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateX(-248px) rotate(1080deg)";
    document.getElementById("btn5").style.transform =
      "translateY(-52px) rotate(1080deg)";
    document.getElementById("btn6").style.transform =
      "translateY(-104px) rotate(1080deg)";
    document.getElementById("btn7").style.transform =
      "translateY(-156px) rotate(1080deg)";
    document.getElementById("btn8").style.transform =
      "translateY(-208px) rotate(1080deg)";
    document.getElementById("btn9").style.transform =
      "translateY(-260px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateX(0)";
    document.getElementById("btn2").style.transform = "translateX(0)";
    document.getElementById("btn3").style.transform = "translateX(0)";
    document.getElementById("btn4").style.transform = "translateX(0)";
    document.getElementById("btn5").style.transform = "translateY(0)";
    document.getElementById("btn6").style.transform = "translateY(0)";
    document.getElementById("btn7").style.transform = "translateY(0)";
    document.getElementById("btn8").style.transform = "translateY(0)";
    document.getElementById("btn9").style.transform = "translateY(0)";

    isPop = false;
  }
}
*/