/*********************************************************************************

    Template Name: Template full name  
    Template URI: https://themeforest.net/user/
    Description: Template description
    Author: author name
    Author URI: author uri
    Version: 1.0

    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================
			[ INDEX ]
=================================================================================

	Write here

=================================================================================
			[ END INDEX ]
================================================================================*/

(function($) {
	'use strict';

    $('a.page-scroll').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });


    $(window).on('scroll', function(){
        var screenPos = $(window).scrollTop();
        if(screenPos > 1){
            $('.navbar-fixed-top').addClass('sticky');
        } else {
            $('.navbar-fixed-top').removeClass('sticky');
        }
    });

	
	

})(jQuery);
