$(document).ready(function(){

	var Home = {
		setSliders: function () {
			var owl = $('#reviews_carousel');
			owl.owlCarousel({
				margin: 10,
				nav: true,
				dots:true,
				loop: true,
				navText: ["<img src='images/left-arrow-white.png' />", "<img src='images/right-arrow-white.png' />"],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});
			owl = $('#partners_slider');
			owl.owlCarousel({
				margin: 10,
				nav: true,
				loop: true,
				items:3,
				navText: ["<img src='images/left-arrow.png' />", "<img src='images/right-arrow.png' />"],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});

			var sliders_sizes = {
				maxWidth: 665,
				maxHeight: 460
			},distance = 100;

			if($(window).width() <= 768){
				sliders_sizes = {
					maxWidth: 300,
					maxHeight: 270
				};
				distance = 5;
			}

			$('#slider_1').carousel({
				num: 3,
				maxWidth: sliders_sizes['maxWidth'],
				maxHeight: sliders_sizes['maxHeight'],
				distance: distance,
				scale: 0.6,
				autoPlay: true,
				animationTime: 500,
				showTime: 4000
			});

			$('#slider_2').carousel({
				num: 3,
				maxWidth: sliders_sizes['maxWidth'],
				maxHeight: sliders_sizes['maxHeight'],
				distance: distance,
				scale: 0.6,
				autoPlay: true,
				animationTime: 500,
				showTime: 4000
			});
		},
		initHeaderMenu: function () {
			//responsive
			$('.headblock-item_nav-menutoggler').on('click', function(){
				$('.response_dropdown_menu').slideToggle('fast');
			});

			//fixed
			$(window).bind('scroll', function () {
				if ($(window).scrollTop() > 0) {
					$('#header').addClass('fixed');
					$('#banner').addClass('fixed');

				} else {
					$('#banner').removeClass('fixed');
					$('#header').removeClass('fixed');
				}
			});
		},
		init: function(){
			this.setSliders();
			this.initHeaderMenu();
		}
	};
	Home.init();



});