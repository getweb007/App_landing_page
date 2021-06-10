/**
  * script for the the menu hamburger animation
  * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
  *
  * @private
  * @author Todd Motto
  * @link https://github.com/toddmotto/foreach
  * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
  * @callback requestCallback      callback   - Callback function for each iteration.
  * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
  * @returns {}
**/
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
// hamburger menu animation
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
		}, false);
	});
}

	
	// Initiate Testimonials carousel
	function fnSwiperTestimonials() {
		if ($('.swiper-testimonial')) {
			
			var mySwiper = new Swiper ('.swiper-testimonial', {
				
				slidesPerView: 2,
				spaceBetween: 0,
					
				// Optional parameters
				loop: true,

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
					
				// responsive breakpoint
				breakpoints: {
					320: {
					   slidesPerView: 1,
					   spaceBetween: 0,
					 },
					1024: {
					   slidesPerView: 2,
					   spaceBetween: 0,
					 },
				}
			});/* END Swiper script */
		}// End if statement
	}//fnSwiperTestimonials
	
	// Initiate Testimonials carousel
	function fnSwiperSuccessStories() {
		if ($('.swiper-succes-stories')) {
			
			var mySwiper = new Swiper ('.swiper-succes-stories', {
				
				slidesPerView: 1,
				spaceBetween: 0,
					
				// Optional parameters
				loop: true,

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
					
				// responsive breakpoint
				breakpoints: {
					320: {
					   slidesPerView: 1,
					   spaceBetween: 0,
					 },
				}
			});/* END Swiper script */
		}// End if statement
	}//fnSwiperSuccessStories
	
	// Initiate Posts Compact carousel on advertisers.html
	function fnSwiperPostsCompact() {
		if ($('.swiper-posts-compact')) {
		
			var mySwiper = new Swiper ('.swiper-posts-compact', {
				
				slidesPerView: 3,
				spaceBetween: 0,
					
				// Optional parameters
				loop: true,

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
					
				// responsive breakpoint
				breakpoints: {
					320: {
					   slidesPerView: 1,
					   spaceBetween: 0,
					 },
					992: {
					   slidesPerView: 2,
					   spaceBetween: 40,
					 },
					1200: {
					   slidesPerView: 3,
					   spaceBetween: 42,
					 }
				}
			});/* END Swiper script */
		}// End if statement
	}// fnSwiperPostsCompact


	// Initiate tabbed cannabis users carousel on advertisers.html
	function fnTabbedCarousel() {
		if ($('.tabbed-carousel-cannabis-users')) {
			
    
				//Wizard
				$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

					var target = $(e.target);
				
					if (target.parent().hasClass('disabled')) {
						return false;
					}
				});

				$(".btn-next").click(function (e) {

					var active = $('.wizard .nav-tabs li.active');
					active.next().removeClass('disabled');
					nextTab(active);

				});
				$(".btn-prev").click(function (e) {

					var active = $('.wizard .nav-tabs li.active');
					prevTab(active);

				});
				function nextTab(elem) {
				$(elem).next().find('a[data-toggle="tab"]').click();
			}
			function prevTab(elem) {
				$(elem).prev().find('a[data-toggle="tab"]').click();
			}


			$('.nav-tabs').on('click', 'li', function() {
				$('.nav-tabs li.active').removeClass('active');
				$(this).addClass('active');
			});

			
		}// End if statement
	}// fnTabbedCarousel


	// Initiate Posts Compact carousel on advertisers.html
	function fnSwiperCompanyLogos() {
		if ($('.swiper-company-logos')) {
		
			var mySwiper = new Swiper ('.swiper-company-logos', {
				
				// Optional parameters
				loop: true,

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
					
				// responsive breakpoint
				breakpoints: {
					320: {
					   slidesPerView: 1,
					   spaceBetween: 0,
					 },
					480: {
					   slidesPerView: 2,
					   spaceBetween: 0,
					 },
					768: {
					   slidesPerView: 3,
					   spaceBetween: 0,
					 },
					992: {
					   slidesPerView: 4,
					   spaceBetween: 0,
					 },
					1200: {
					   slidesPerView: 5,
					   spaceBetween: 20,
					 }
				}
			});/* END Swiper script */
		}// End if statement
	}// fnSwiperCompanyLogos

	// Run animated li 
	function fnFadeUpList() {
	   $('.ul-animate-li-fadeup li').each(function(i){
			var row = $(this);
			setTimeout(function() {
				row.addClass('fadeup');
			}, 1000*i);
		});
	}// fnFadeUpList
	
fnSwiperTestimonials();
fnSwiperSuccessStories();
fnSwiperPostsCompact();
fnTabbedCarousel();
fnSwiperCompanyLogos();
fnFadeUpList();