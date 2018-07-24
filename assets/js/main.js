/*
Theme Name: Ricochet
Version: 1.2.0
Author: Mkscoder
Author URI: http://www.mkscoder.com
Description: Multi-Purpose Theme by Mkscoder
*/

/*	IE 10 Fix*/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(document).ready(function($) {
    "use strict";
	
		
		/* ==============================================
	Sticky
	=============================================== */
    
		try {
			$("#navigation").sticky({
				topSpacing: 0,
				className: 'sticky'
			});
			
		} catch (err) {

		}
		
		/* ==============================================
	Menu For Mobile
	=============================================== */	
		try {
			
			$('.nav-toggle').hover(function() {
				$(this).find('.dropdown-menu').first().stop(true, true).slideToggle(300);
				}, function() {
				$(this).find('.dropdown-menu').first().stop(true, true).slideToggle(200)
			});
		
			$('.mobile-menu,.nav-toggle').on('click', function() {
				$('.dr-mobile').slideUp().removeClass('down');
				$(this).toggleClass('active');
				$('.extra').slideToggle(100);
			});
			
			
		} catch (err) {

		}
		

		/* ==============================================
	Drop Down Menu For Mobile
	=============================================== */	

		$('.mobile-toggle').click(function() {
			if($(this).find('.dr-mobile').first().hasClass('down')) {
				$(this).find('.dr-mobile').first().stop(true, true).slideUp(400).removeClass('down');
			}
			else {
				$(this).parent().find('.dr-mobile').slideUp().removeClass('down');
				$(this).find('.dr-mobile').first().stop(true, true).slideDown(400).addClass('down');
			}	
		});
		
		
		
		
		/* ==============================================
	Magnific Popup
	=============================================== */		
		$('.popup-with-zoom-anim').magnificPopup({
				  type: 'inline',

				  fixedContentPos: false,
				  fixedBgPos: true,

				  overflowY: 'auto',

				  closeBtnInside: true,
				  preloader: false,
				  
				  midClick: true,
				  removalDelay: 300,
				  mainClass: 'my-mfp-zoom-in'
				});

    
		$('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });
	
	});

		
		
		/* ==============================================
	Liquid Slider - Home Text Slider
	=============================================== */
		$('#cp-home-liquid-slider').liquidSlider({
			autoSlide: true,
			autoSlideInterval: 4500,
			autoSlideControls: true,
			forceAutoSlide: true,
			dynamicArrows: false,

			slideEaseFunction: 'animate.css',
			slideEaseDuration: 900,
			heightEaseDuration: 900,
			animateIn: "bounceIn",
			animateOut: "bounceOut",
			callback: function() {
				var self = this;
				$('.slider-6-panel').each(function() {
					$(this).removeClass('animated ' + self.options.animateIn);
				});
			}
		});

     
    
		/* ==============================================
	Slick Sliders
	=============================================== */
		$('.item').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 400,
				  settings: {
					slidesToShow: 1
				  }
				}
			  ]
		});

		$('.subscribe-slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
		});

		$('.partner-logo').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 400,
				  settings: {
					slidesToShow: 1
				  }
				}
			  ]
		});
		
		$('.shop-service').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
				  breakpoint: 917,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 615,
				  settings: {
					slidesToShow: 1
				  }
				}
			  ]
		});
		
		$('.hire-slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 2000
		});
		
		$(document).on('click', '.detail-link', function(e) {
			e.preventDefault();
			$('#toggle-detail').slideToggle();
			$("html, body").animate({ scrollTop: 2000 }, 2000);
		});
	
		/* ==============================================
	Search Custom
	=============================================== */
		(function() {
			var morphSearch = document.getElementById( 'morphsearch' ),
				input = morphSearch.querySelector( 'input.morphsearch-input' ),
				ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
				isOpen = isAnimating = false,
				// show/hide search area
				toggleSearch = function(evt) {
					// return if open and the input gets focused
					if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

					var offsets = morphsearch.getBoundingClientRect();
					if( isOpen ) {
						classie.remove( morphSearch, 'open' );

						// trick to hide input text once the search overlay closes 
						// todo: hardcoded times, should be done after transition ends
						if( input.value !== '' ) {
							setTimeout(function() {
								classie.add( morphSearch, 'hideInput' );
								setTimeout(function() {
									classie.remove( morphSearch, 'hideInput' );
									input.value = '';
								}, 300 );
							}, 500);
						}
						
						input.blur();
					}
					else {
						classie.add( morphSearch, 'open' );
					}
					isOpen = !isOpen;
				};

			// events
			input.addEventListener( 'focus', toggleSearch );
			ctrlClose.addEventListener( 'click', toggleSearch );
			// esc key closes search overlay
			// keyboard navigation events
			document.addEventListener( 'keydown', function( ev ) {
				var keyCode = ev.keyCode || ev.which;
				if( keyCode === 27 && isOpen ) {
					toggleSearch(ev);
				}
			} );


			/***** for demo purposes only: don't allow to submit the form *****/
			morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
		})();
		
		
		
		/* ==============================================
	Google Maps
	=============================================== */

	$("#map").gmap3({
		marker:{     
		address:"93 Worth St, New York, NY", 
		options:{ icon: "assets/images/marker.png"}},
		map:{
		options:{
		styles: [ {
		stylers: [ { "saturation":-100 }, { "lightness": 0 }, { "gamma": 0.5 }]},
		],
		zoom: 13,
		scrollwheel:false,
		draggable: true }
		}
	});	
	
		/* ==============================================
	Price Slider
	=============================================== */
	
	$("#price-slider").ionRangeSlider({
		type: "double",
		min: 25,
		max: 399,
		from: 75,
		to: 399,
		hide_min_max: true,
		hide_from_to: true,
		grid: false
	});

	
		/* ==============================================
	Cart Item Quantity Control
	=============================================== */	
	
	$(".cart-item-quantity button").click(function() {
		var currentVal = parseInt($(this).prev(".cart-quantity").val());

		if (!currentVal || currentVal == "" || currentVal == "NaN") currentVal = 0;

		$(this).prev(".cart-quantity").val(currentVal + 1);
	});

	$(".cart-item-minus").click(function() {
		var currentVal = parseInt($(this).next(".cart-quantity").val());
		if (currentVal == "NaN") currentVal = 0;
		if (currentVal > 0) {
			$(this).next(".cart-quantity").val(currentVal - 1);
		}
	});
	
	
	/* ==============================================
	Preloader
	=============================================== */
	try {
		$(window).load(function() {
			$("#preloader").delay(500).fadeOut(1000);
			$(".preload-logo").addClass('fadeOutLeft');
			$(".preload-gif").addClass('fadeOutUp');

		});
	} catch (err) {

        }
	
	
	/* ==============================================
	Wow animation Custom
	=============================================== */
		
	try {
		wow = new WOW(
			{
			  boxClass:     'wow',      // default
			  animateClass: 'animated', // default
			  offset:       0,          // default
			  mobile:       true,       // default
			  live:         true        // default
			}
		)
		wow.init();
		
	} catch (err) {

		}
		