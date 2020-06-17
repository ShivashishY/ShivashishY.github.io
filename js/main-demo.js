$(function() {

    $('.style-options').addClass('active');
    setTimeout(function(){
        $('.style-options').removeClass('active');
    }, 5000);

    $('.style-options .toggle-btn').on('click', function() {
        $('.style-options').toggleClass('active');
    });

    $('.style-nav li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.posit-nav').attr('href', style_link);

        e.preventDefault();
    });
	
	$('.style-back li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.back-color').attr('href', style_link);

        e.preventDefault();
    });
	
	$('.style-box li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.box-st').attr('href', style_link);

        e.preventDefault();
    });
	
	$('.style-color li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.theme-color').attr('href', style_link);

        e.preventDefault();
    });

});