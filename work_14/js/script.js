$(document).ready(function() {
//SCROLL
 $("a[rel='m_PageScroll2id']").mPageScroll2id();
 var scrolled;
window.onscroll = function() {
scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled < 200){
			$(".upScroll").css({"display":"none"})
		}
		if(200 < scrolled){
		$(".upScroll").css({"display":"block"})
		}
	}

//BACKGROUND
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

//БУРГЕР
	$('.icon-menu').click(function(e) {
		$(this).toggleClass("active");
		$('.menu__body').toggleClass("active");
		$('body').toggleClass("lock");
		e.stopPropagation();
	});
	$('.menu__body').click(function(e) {
		$(this).toggleClass("active");
		$('body').toggleClass("lock");
		e.stopPropagation();
	});

//SLIDER
	if($('.slider__body').length>0){
		$('.slider__body').slick({
			dots: true,
			arrows: false,
			accessibility: false,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings:{}
			}]
		});
	}

});
