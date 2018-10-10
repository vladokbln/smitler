// подключаем библиотеки из bower

//=../bower_components/jquery/dist/jquery.js
//=../bower_components/jQuery.mmenu/dist/jquery.mmenu.all.js
//=../bower_components/bootstrap/dist/js/bootstrap.js
//=../bower_components/owl.carousel/dist/owl.carousel.js
//=../bower_components/jQuery.equalHeights/jquery.equalheights.js
//=../bower_components/fotorama/fotorama.js
//=../bower_components/selectize/dist/js/standalone/selectize.js

$(function () {
	$('#my-menu').mmenu({
		extensions: [ "theme-black", "effect-menu-slide", "pagedim-black", "position-right" ],
		navbar: {
			title: "<img src='img/logo.svg'>"
		},

	});
	var api = $("#my-menu").data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});

	api.bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

	$('.services-carousel').on('initialized.owl.carousel', function() {
		setTimeout(function(){
			carouselServices()
		},100);
	});

	$('.services-carousel').owlCarousel({
		// loop: true,
		dots: false,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsivClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	function carouselServices() {
		$('.services-carousel__item').each(function () {
			var ths = $(this),
				thsh = ths.find('.services-carousel__content').outerHeight();
				ths.find('.services-carousel__image').css('min-height', thsh);
		});
	};

	$('.services-carousel__title').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
	});

	$('.king-title').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
	});

	$('.reviews-title').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
	});

	function onResize(){
		$('.services-carousel__content').equalHeights();
	} onResize();

	$('.king-slider-js').fotorama({
		nav: 'thumbs',
		width: '100%',
	    thumbwidth: 110.5,
	    thumbheight: 65,
	    thumbborderwidth: 4,
	    thumbmargin: 5,
	    shadows: false
	});

	$('select').selectize();

	$('.reviews-js').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 700,
		autoHeight:true
	});

	$('.partners-js').owlCarousel({
		items: 4,
		loop: true,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$("call-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	function initMap() {
	  var coords = {lat: 55.683098, lng: 37.558352};
	  
		var map = new google.maps.Map(document.querySelector('#map'), {
			zoom: 17,
			center: coords
		});
	  marker = new google.maps.Marker({
	    position: coords,
	    map: map
		});
	} initMap();

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({
			scrollTop:0
		}, 'slow', 'swing');
	});
});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});





