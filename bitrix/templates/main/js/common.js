function initYandexMap(){   
	var mapSetting = {};
	mapSetting.centerX = $("#map").data("center-x");
	mapSetting.centerY = $("#map").data("center-y");
	mapSetting.zoom = $("#map").data("zoom");
	mapSetting.markerX = $("#map").data("marker-x");
	mapSetting.markerY = $("#map").data("marker-y");
	var myMap;
	myMap = new ymaps.Map("map", {
		center: [mapSetting.centerX,mapSetting.centerY],
		zoom: mapSetting.zoom
	});
	myMap.controls.add('zoomControl', { top: 10, left: 5 });

	myPlacemark0 = new ymaps.Placemark([mapSetting.markerX,mapSetting.markerY], {
		balloonContent: "" 
		}, {
		iconImageHref: "img/map-marker.png", 
		iconImageSize: [27, 35], 
		iconImageOffset: [0, 0]
	}); 
	myMap.geoObjects.add(myPlacemark0);
}

function initSliderMain() {
	$('.js-slider-init').slick({
		rows: 2,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
		nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
		responsive: [
		{
			breakpoint: 1150,
			settings: {
				rows: 3,
				slidesToShow: 2,
				slidesToScroll: 3
			}
		},{
			breakpoint: 700,
			settings: 'unslick'
		}
	  ]
	});
}
function initSliderVideo() {
	$('.js-slider-init-video').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: false,
		arrows: true,
		variableWidth: true,
		infinite: true,
		prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
		nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
		responsive: [
		{
			breakpoint: 1150,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},{
			breakpoint: 700,
			settings: 'unslick'
		}
	  ]
	});
}

function initScrollbar(tag) {
	$(tag).perfectScrollbar();
}

function initSliderCustom() {
	initSliderGallery('.js-slider-init-gallery', '.js-slider-gallery-preview', '.js-open-gallery', '.js-open-gallery-modal', '.js-close-gallery-modal' )
	initSliderGallery('.js-slider-init-certificate', '.js-slider-certificate-preview', '.js-open-certificate', '.js-open-certificate-modal', '.js-close-certificate-modal' )
	initSliderGallery('.js-slider-init-youtube', '.js-slider-youtube-preview', '.js-open-youtube', '.js-open-youtube-modal', '.js-close-youtube-modal' )
	function initSliderGallery(init, preview, open, openContent, close) {

		function scrollTopCustom() {
			var activeSlide = $(init).find('.slick-active').data('gallery');
			var __scrollEl = $(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").position().top;
			var __scrollElHeight = $(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").height();
			var __scrollCont = $(preview).height();
			
			if (__scrollEl > __scrollCont)  { 
				var __scrollTop = $(preview).scrollTop();
				$(preview).scrollTop(__scrollTop +__scrollEl - __scrollCont + __scrollElHeight);
				$(preview).perfectScrollbar('update');
			}
			if (__scrollEl < 0) {
				var __scrollTop = $(preview).scrollTop();
				$(preview).scrollTop(__scrollTop + __scrollEl);
				$(preview).perfectScrollbar('update');
			}
		}
		if (init != '.js-slider-init-youtube') {
			$(init).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			infinite: false,
			prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
			nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
			});
			$(init).find('.slider_arrow').on('click', function() {
				var activeSlide = $(init).find('.slick-active').data('gallery');
				$(preview).find(".img-content").removeClass('active');
				$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
				scrollTopCustom();
			})
			$(init).on('swipe', function(event, slick, direction){
				var activeSlide = $(init).find('.slick-active').data('gallery');
				$(preview).find(".img-content").removeClass('active');
				$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
				scrollTopCustom();
			});
			var __p = preview + ' .wrapp-img';
			$(__p).on('click', function(e) {
				var activeSlide = $(this).data('gallery');
				$(init).slick('slickGoTo', activeSlide-1);
				$(preview).find(".img-content").removeClass('active');
				$(this).find('.img-content').addClass('active');
			})
			$(open).on('click', function(){
				$('body').addClass('overflow-hidden');
				$(openContent).fadeIn(1000);
				$(openContent).fadeIn({
					duration: 1000,
					complete: function(){
						initScrollbar(preview);
					}
				});
				var activeSlide = $(this).data('gallery');
				$(init).slick('setPosition');
				$(init).slick('slickGoTo', activeSlide-1);
				$(preview).find(".img-content").removeClass('active');
				$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
			})
			$(close).on('click', function(){
				$(openContent).fadeOut(500);
				$('body').removeClass('overflow-hidden');


			})
			$(openContent).on('click', function(e) {
				if (!$(e.target).closest('.gallery').length) {
					$(openContent).fadeOut(500);
					$('body').removeClass('overflow-hidden');
				}
			});
		}
		else {
			$(open).on('click', function(){
				$('body').addClass('overflow-hidden');
				$(openContent).fadeIn(1000);
				$(openContent).fadeIn({
					duration: 1000,
					complete: function(){
						initScrollbar(preview);
					}
				});
				var activeSlide = $(this).data('gallery');
				$(preview).find(".img-content").removeClass('active');
				$(preview).find("[data-gallery='" + activeSlide + "']").find(".img-content").addClass('active');
				$(init).find("[data-gallery='" + activeSlide + "']").fadeIn(0).siblings().fadeOut(0);
			})
			var __p = preview + ' .wrapp-img';
			$(__p).on('click', function(e) {
				var activeSlide = $(this).data('gallery');
				$(preview).find(".img-content").removeClass('active');
				$(this).find('.img-content').addClass('active');
				$(init).find("[data-gallery='" + activeSlide + "']").fadeIn(0).siblings().fadeOut(0);
			})
			$(close).on('click', function(){
				$(openContent).fadeOut(500);
				$('body').removeClass('overflow-hidden');
				var activeSlide = 'video' + $(preview).find('.active').parent().data('gallery');
				player = new YT.Player(activeSlide);
				player.pauseVideo();
			})
			$(openContent).on('click', function(e) {
				if (!$(e.target).closest('.gallery').length) {
					$(openContent).fadeOut(500);
					$('body').removeClass('overflow-hidden');
				}
			});
		}
		
		


	}

}
function initSliderOne() {
	$('.js-slider-init-one-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: "<button type='button' class='slider_arrow slider_arrow-pre'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z'/></svg></button>",
		nextArrow: "<button type='button' class='slider_arrow slider_arrow-next'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 27' enable-background='new 0 0 15 27' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z'/></svg></button>",
	});
}

function swichTabs() {
	$(this).addClass("active").siblings().removeClass("active");
	var currTab = $(".js-tabs-content").find("[data-tab-content='" + $(this).data("tab") + "']");
	currTab.fadeIn(250).siblings().fadeOut(0);
	currTab.slick('setPosition');
}

function shadowScroll(scrollContainer, scrolling, add) {
	if ($(scrolling).position().left < 0)  $(add).addClass('shadow_left');
	else $(add).removeClass('shadow_left');
	if ($(scrolling).position().left + $(scrolling).width() > $(scrollContainer).width()) $(add).addClass('shadow_right');
	else $(add).removeClass('shadow_right');
}

function initBurger() {
	// $('.js-burger').off('click.burger').on('click.burger', function() {
	$('.js-burger').on('click', function() {
		$('.js-burger-menu').removeClass('hidden');
		$('body').addClass('overflow-hidden');
		setTimeout( function() { $('#burger_menu').toggleClass('burger-animate') } , 100)
	});

	$('.js-burger-close').on('click', function() {
		setTimeout( function() { $('.js-burger-menu').addClass('hidden'); } , 500)
		$('body').removeClass('overflow-hidden');
		$('#burger_menu').toggleClass('burger-animate')
	});

	$('.js-burger-menu').on('click', function(e) {
		if (!$(e.target).closest("#burger_menu").length) {
			setTimeout( function() { $('.js-burger-menu').addClass('hidden'); } , 500)
			$('body').removeClass('overflow-hidden');
			$('#burger_menu').toggleClass('burger-animate')
		}
	});
}

function initForm() {
	$('.js-form input').on( "focusout", function() {
		if(this.value.length != 0) {
			$(this).addClass('input-border-bottom-value');
		}
		else $(this).removeClass('input-border-bottom-value');
	})
}

function initPopup() {
	$('.js-popup-open').on('click', function () {
		var __h = '.js-'+$(this).data('open-popup');
		$('.js-popup').fadeIn(250);
		$(__h).fadeIn(250).siblings().fadeOut(250);
		$('body').addClass('overflow-hidden');
	})

	$('.js-popup-close').on('click', function() {
		var __h = '.js-'+$(this).data('close-popup');
		$(__h).fadeOut(250);
		$('.js-popup').fadeOut(250);
		$('body').removeClass('overflow-hidden');
		resetForm($('.js-popup').find('.js-form'));
	});

	$('.js-popup').on('click', function(e) {
		if (!$(e.target).closest('.wrapp_popup_window').length) {
			$('.js-popup').fadeOut(250);
			$('body').removeClass('overflow-hidden');
			resetForm($('.js-popup').find('.js-form'));
		}
	});

}

function initMenu() {
	$('.js-menu-category').on( 'mouseover', function(e){
		var fade = 0;
		if (!globalSetting.menuFirstOpen) { fade = 500; globalSetting.menuFirstOpen = true;}
		else fade = 0;
		if ($(e.target).data('index') == undefined ) e.preventDefault();
		else {
			$('.js-menu-category-content').find("[data-index='" + $(e.target).data('index') + "']").fadeIn(fade).siblings().fadeOut(0);
		}
		if ($(e.target).data('tab'))  {
			$('.wrapp_content').fadeOut(0);
			$('.js-menu-category-content-item').find("[data-tab-content='" + $(e.target).data('tab') + "']").fadeIn(0).css("display","inline-block");
		}
	});
	$('.js-menu-category').on( 'mouseleave', function(e){
		$('.js-menu-category-content-item').fadeOut(200);
	});


	
	
}

function initSearch() {
	$('.js-search-open').on('click', function() {
		$('.js-search').fadeIn(250);
		$('body').addClass('overflow-hidden');
	});
	$('.js-search-close').on('click', function() {
		$('.js-search').fadeOut(250);
		$('body').removeClass('overflow-hidden');
		resetForm($('.js-search').find('.js-form'));
	});
}

function resetForm(form) {
	$(form).trigger("reset");
	$(form).find('input').removeClass('input-border-bottom-value');
}

function initSlider() {
	if ($('.js-slider-init').length) initSliderMain();
	if ($('.js-slider-init-one-slide').length) initSliderOne();
	if ($('.js-slider-init-video').length) initSliderVideo();
	if ($('.js-slider-init-gallery').length) initSliderCustom();
}

function initFilters() {
	$('.js-item-filter').on('click', function(e) {
		$(this).next().fadeToggle(100);
		// $(this).find('.item-filter-content').fadeToggle(100);
	});
}

function initSlidersUi() {
	  // $( function() {
	  //   $( "#slider" ).slider();
	  // } );
	$(".js_ui_slider").each(function () {
		var slider = $(this).find(".js_ui_slider_main");
		var sliderSetting = {};
		sliderSetting.max = $(this).data("max");
		sliderSetting.min = $(this).data("min");
		sliderSetting.step = $(this).data("step");
		sliderSetting.defaultValueTo = $(this).data("default-value-to");
		sliderSetting.defaultValueFrom = $(this).data("default-value-from");
		// sliderSetting.labelTo = $(this).find(".js_ui_slider_label");
		sliderSetting.inputHidden = $(this).find(".js_ui_slider_input");
		sliderSetting.inputHiddenTop = $(this).find(".js_ui_slider_value_top");
		sliderSetting.inputHiddenBottom = $(this).find(".js_ui_slider_value_bottom");
		slider.slider({
			range: true,
			min: sliderSetting.min,
			max: sliderSetting.max,
			step: sliderSetting.step,
			values: [ sliderSetting.defaultValueTo, sliderSetting.defaultValueFrom ],
			slide: function( event, ui ) {
				// $(sliderSetting.inputHidden).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				$(sliderSetting.inputHiddenTop).val(ui.values[ 1 ]);
				$(sliderSetting.inputHiddenBottom).val(ui.values[ 0 ]);
			}
		});
		$(sliderSetting.inputHidden).text( sliderSetting.defaultValueTo + " - " + sliderSetting.defaultValueFrom );
		$(sliderSetting.inputHiddenTop).val(sliderSetting.defaultValueFrom);
		$(sliderSetting.inputHiddenBottom).val(sliderSetting.defaultValueTo);
	});
}

function initSticky() {
	$(window).scroll(function () {
		var offsetS = $('#sticky').offset().top;
		var scrollTop = $(this).scrollTop(),
		    h = $(this).height(),
		    offset = $('#end').offset().top;
		    footer_h = $('#end').height();
		if (offset - scrollTop + 300 <= h) {
			$('#sticky').css({'position' : 'absolute', 'top': offset - footer_h - 100});
		}
		if (offset - scrollTop + 300 > h) {
			if ($(this).scrollTop() >= 700) {
				$('#sticky').css({'position' : 'fixed','top':'30px'});
			}
			else if ($(this).scrollTop() < 700) {
				$('#sticky').css({'position' : 'absolute','top':'750px'});
			}
		}
	})
}

function initShowOther() {
	$('.js-show-text').each(function() {
		var __h = $(this).find('.js-show-other-content').height();
		var __openContent = $(this).find('.js-show-other-content');
		var open = false;
		var defaultHeight = $(this).data('height');

		$(this).find('.js-show-other-content').css({'height':defaultHeight});
		$(this).find('.js-show-other').on('click', function() {
			if (!open) { 
				var __hNow = __h + 15; 
				open = true;
				$(__openContent).removeClass('')
			}
			else { var __hNow = defaultHeight; open = false }
			
			$(__openContent).animate({ 
				height: __hNow
			}, 500);
		})
	});
}
function initDropShow () {
	$('.js-drop-open ').each(function() {
		$(this).on('click', function() {
			$(this).find('.js-drop-open-content').slideToggle(300);
			$(this).find('.down').toggleClass('up');
		})
	})
}

function initMenuOther() {
	$('.js-menu-dropdown').each(function() {
		var click = $(this).find('.js-menu-dropdown-open');
		var clickLeft = $(this).find('.js-menu-dropdown-open').position().left - 20;
		var __this = this;
		$(click).on('click', function() {
			$(this).find('.down').toggleClass('up');
			$(__this).find('.js-menu-dropdown-dop').css({"left":clickLeft});
			$(__this).find('.js-menu-dropdown-dop').slideToggle(200);
		})
		function menuResize() {

		}
		$(window).on('resize', function(){
			// if ($(this).width() < 300 ) {
			// 	// console.log($('.js-menu-dropdown .main_menu').children());
			// }
			// else if ($(this).width() < 630 ) {
			// 	$('.js-menu-dropdown-dop').append($('.js-menu-dropdown .main_menu').children()[length]);
			// 	var del = $('.js-menu-dropdown .main_menu').children()[length]

			// 	// console.log($('.js-menu-dropdown .main_menu').children())
			// 	console.log(del);
			// }
		});

		
	})
}
 
function initSetting() {
	globalSetting.menuFirstOpen = false;
}
var globalSetting = [];
initSetting();

$( document ).ready(function() {

	if ($('.js-scroll-content').length) {
		shadowScroll('.js-scroll-container', '.js-scroll-content', '.js-scroll-opasity');
		$('.js-scroll-container').on( 'scroll', function(){
			shadowScroll('.js-scroll-container', '.js-scroll-content', '.js-scroll-opasity');
		});
		$(window).on( 'resize', function(){
			shadowScroll('.js-scroll-container', '.js-scroll-content' , '.js-scroll-opasity');
		});
	}

	$('.js-tabs-categories li').on('click', function() {
		swichTabs.call(this);
	});
	
	initSlider();
	initBurger();
	initPopup();
	initForm();
	initMenu();
	initSearch();
	initFilters();
	initSlidersUi();
	if ($("#map").length > 0) ymaps.ready(initYandexMap);
	if ($("#sticky").length > 0 ) initSticky();
	initShowOther();
	initDropShow();
	initMenuOther();



	// добавить стили классу
	// console.log(document.styleSheets[0].rules[260]);
	// console.log(document.styleSheets[0].rules[260].media);
	// for( var i = 0; i < document.styleSheets[0].rules.length; i++ ) {
	// 	if (document.styleSheets[0].rules[i].conditionText == '(max-width: 1330px)') {
	// 		var k;
	// 	}
	// }




});