$(document).ready(function(){

	var Home = {
		setSliders: function () {
			var owl = $('#payment_carousel');
			owl.owlCarousel({
				margin: 10,
				nav: true,
				dots:true,
                dotsEach:true,
				loop: true,
				navText: ["<img src='/images/arrow_left.png' />", "<img src='/images/arrow_right.png' />"],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 5
					}
				}
			});

            owl = $('#main_slider');
            owl.owlCarousel({
                margin: 10,
                dots:true,
                dotsEach:true,
                loop: true,
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
                margin: 30,
                dots:true,
                dotsEach:true,
                nav: false,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
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
			//this.initHeaderMenu();
		}
	};
	Home.init();



});