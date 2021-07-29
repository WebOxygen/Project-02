(function () {
	"use strict";
	
    jQuery(document).ready(function($){
		
		/*Popover*/
		$('[data-toggle="popover"]').popover(
    		{
			html : true,
			trigger: 'focus',
			//trigger :'manual',
			content: function() {
				var content = $(this).attr("data-popover-content");
				return $(content).children(".popover-body").html();
			}
	    });
		
		$('[data-toggle="tooltip"]').tooltip();

       //For mobile menu
		$( "#navigation" ).clone().prependTo( $( ".nav-mobile" ) ); 
        $( ".logo" ).clone().prependTo( $( ".nav-mobile" ) ); 
        $( ".need-help" ).clone().appendTo( $( ".nav-mobile" ) );
        
       $('.goodness-milk-nutrition-slider-images').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
             dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left''></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",  
          asNavFor: '.goodness-milk-nutrition-slider-txt-items'
        });
        $('.goodness-milk-nutrition-slider-txt-items').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.goodness-milk-nutrition-slider-images',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
        $(".goodness-the-importance-slider").slick({
            slidesToShow: 1,
			arrows: true,
            dots: true,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        
        $(".goodness-the-power-slider-area").slick({
            slidesToShow: 1,
			arrows: true,
            dots: true,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        $(".goodness-protein-slider-area").slick({
            slidesToShow: 1,
			arrows: true,
            dots: true,
            autoplay: false,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'fade',
			fade: true,
            speed: 500,
            cssEase: 'ease-in-out',
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        $(".goodness-delicious-milk-area").slick({
            slidesToShow: 1,
			arrows: true,
            dots: false,
            autoplay: false,
            infinite: false,
            //draggable: false,
            touchMove: false,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });

		//WOW animation
		new WOW().init();
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 200) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
           
		});
        
        $(".go-adition").click(function() {
            $('html,body').animate({
                scrollTop: $(".addition-product").offset().top},
                1500);
             $('.addition-product .page-content-block').addClass('active');  
        });
        
        
       $('.membership-btn').on("click", function() {
         $('.plan-content').removeClass('active');    
         $('.membership-content').addClass('active');  
       });
        
      $('.onetime-btn').on("click", function() {
         $('.plan-content').removeClass('active');    
         $('.oneTime-content').addClass('active');  
       }); 
        
      /*increase number*/
		$('.add-number').click(function () {
        if ($(this).prev().val() < 99) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
		});
		$('.sub-number').click(function () {
			if ($(this).next().val() > 1) {
			  if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
		});
        
       $('.cart-open').on("click", function() {
         $('body').addClass('cartOverlay');    
       });  
       $('.cart-close').on("click", function() {
         $('body').removeClass('cartOverlay');    
       }); 
       $('.addToCart-overlay').on("click", function() {
         $('body').removeClass('cartOverlay');    
       }); 
        
        $('.modal').on('shown.bs.modal', function (e) {
            $('.modal .choose-product-for').resize();
            $('.modal .choose-product-for').slick('setPosition');
            $('.modal .choose-product-nav').slick('setPosition');
            $('.modal .choose-product-slider').addClass('open');
         }) 
		
    });

}(jQuery));	
