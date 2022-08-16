/*

Template:  Theme Name
Author: author name
Version: 1
Design and Developed by: BM Rafiq + Masud Rana
NOTE: If you have any note put here. 

*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu
	02. wow js active
	03. scrollUp jquery active
	04. slick carousel 

 
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";



/*------------------------------------------------
      Top menu stick
     -------------------------------------------------- */
    // var sticky_menu = $("#sticky-header");
    // var pos = sticky_menu.position();
    // if (sticky_menu.length) {
    //     var windowpos = sticky_menu.top;
    //     $(window).on('scroll', function() {
    //         var windowpos = $(window).scrollTop();
    //         if (windowpos > pos.top) {
    //             sticky_menu.addClass("sticky");
    //         } else {
    //             sticky_menu.removeClass("sticky");
    //         }
    //     });
    // }



    /*-------------------------------------------
    	01. jQuery MeanMenu
    --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();


    /*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
    new WOW().init();


    /*-------------------------------------------
    	03. scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*-------------------------------------------
    	04. slick carousel 
    --------------------------------------------- */
    $('.your-class').slick({
    	  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000
  	});


    /*************************
          tooltip
    *************************/
    $('[data-toggle="tooltip"]').tooltip();
	
	
	/* carousel activator start */
	$('.slider_activator').owlCarousel({
		 loop:true,
		 margin:10,
		 autoplay:true,
		 responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	
	$('.slider_activator-1').owlCarousel({
		 loop:true,
		 margin:10,
		 autoplay:true,
		 responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	 
	 
	
	
	 //Parallax start area
        $('#nav').localScroll(800);
        
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
        $('#parallax').parallax("50%", 0.1);
        $('#skills').parallax("50%", 0.1);
        $('#Testimonial').parallax("50%", 0.1);
        $('#contact').parallax("50%", 0.1);
    //Parallax end area

	
			var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        var $buttonGroup = $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        }); 
		$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	}); 
	
	$(document).ready(function(){
        		$('.tml').animate({width:'80%'},2000);
        		$('.ss').animate({width:'90%'},2000);
        		$('.ds').animate({width:'65%'},2000);
        		$('.dhp').animate({width:'70%'},2000);
        		$('.ajax').animate({width:'75%'},2000);
        	});
	$('.count').counterUp({
                delay: 10,
                time: 1000,
     });
	
	
	
 
	 
})(jQuery);

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('#sticky-header').addClass("sticky");
  }
  else{
    $('#sticky-header').removeClass("sticky");
  }
});
