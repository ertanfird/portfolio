//ЗАГРУЗКА
$(window).on('load', function () {
	var $preloader = $('#loader'),
		$svg_anm   = $preloader.find('.svg_anm');
	$preloader.delay(1500).fadeOut('slow');
	});

//SHUFFLE
	var shuffle = $("#shuffle");

	// Shuffle the contents of shuffle
	shuffle.shuffleLetters();




//CURSOR


//СЛАЙДЕР РАБОТ

const websites = [
		"https://mirror-test.000webhostapp.com/index.php",
		"https://ertan-fird.github.io/work_14/",
		"./websites/site3.html"
];
const websitesMobile = [
		"https://mirror-test.000webhostapp.com/index.php",
		"https://ertan-fird.github.io/work_14/",
		"./websites/site3.html"
];
const $frame        = $(".slider-desctop__frame");
const $frameM       = $(".slider-mobile__frame")
const $sliderWork   = $(".slider-desctop__covers");
const $sliderMobile = $(".slider-mobile__covers");

$sliderWork.slick({
		arrows: true,
		appendArrows: ".slider-work__arrows",
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		asNavFor: ".slider-mobile__covers"
});

$sliderWork.on("click", ".slider-desctop__item", function(e){
		const $index = $(this).data("index");

		$frame.attr("src", websites[$index]);
		$frame.fadeIn(200);
});



$sliderWork.on("beforeChange", () => {
		$frame.fadeOut(400);
});

$sliderMobile.slick({
		arrows: false,
		asNavFor: ".slider-desctop__covers"
});

$sliderMobile.on("click", ".slider-mobile__item", function(e){
		const $index = $(this).data("index");

		$frameM.attr("src", websites[$index]);
		$frameM.fadeIn(200);
});

$sliderMobile.on("beforeChange", () => {
		$frameM.fadeOut(400);
});


//
//
// var left = 0;
// var iframe = document.querySelectorAll('.iframe');
//
// document.querySelector('#next').onclick = sliderLeft;
// document.querySelector('#back').onclick = sliderRight;
//
// function sliderLeft() {
// 	var sliderWorksDes = document.querySelector('.desctop');
// 	var sliderWorksMob = document.querySelector('.mobile');
// 	left = left + 100;
// 	if (left > 200) {
// 		left = 0;
// 	}
// 	sliderWorksDes.style.right = left + '%';
// 	sliderWorksMob.style.right = left + '%';
// 	document.querySelector("#loader-d").style.display = 'none';
// 	document.querySelector("#loader-m").style.display = 'none';
// 	iframe.forEach(function (entry) {
// 		entry.innerHTML = '';
// 	});
// }
//
// function sliderRight() {
// 	var sliderWorksDes = document.querySelector('.desctop');
// 	var sliderWorksMob = document.querySelector('.mobile');
// 	if (left < 100) {
// 		left = 200;
// 	}else{
// 		left = left - 100;
// 	}
// 	sliderWorksDes.style.right = left + '%';
// 	sliderWorksMob.style.right = left + '%';
// 	document.querySelector("#loader-d").style.display = 'none';
// 	document.querySelector("#loader-m").style.display = 'none';
// 	iframe.forEach(function (entry) {
// 		entry.innerHTML = '';
// 	});
// }
//
// document.querySelector('#sb-1').onclick = function() {
// 	document.querySelector('#comment-1').innerHTML = `</div><iframe src="https://mirror-test.000webhostapp.com/index.php" ></iframe>`;
// 	console.log("work");
// 	document.querySelector("#loader-d").style.display = 'flex';
// 	document.querySelector("#loader-d").style.left = '0';
// 	document.querySelector('.iframe').style.left = '0';
// };
//
// document.querySelector('#sb-1-m').onclick = function() {
// 	document.querySelector('#comment-1-m').innerHTML = `</div><iframe class="iframe-m" src="https://mirror-test.000webhostapp.com/index.php" width="239px" height="510px"></iframe>`;
// 	console.log("work");
// 	document.querySelector("#loader-m").style.display = 'flex'
// 	document.querySelector("#loader-m").style.left = '0';
// 	document.querySelector('.iframe').style.left = '0';
// };
// document.querySelector('#sb-14').onclick = function() {
// 	document.querySelector('#comment-14').innerHTML = `</div><iframe src="https://ertan-fird.github.io/work_14/" ></iframe>`;
// 	console.log("work");
// 	document.querySelector("#loader-d").style.display = 'flex';
// 	document.querySelector("#loader-d").style.left = '33.335%';
// 	document.querySelector('#comment-14').style.left = '33.335%';
// };
//
// document.querySelector('#sb-14-m').onclick = function() {
// 	document.querySelector('#comment-14-m').innerHTML = `</div><iframe class="iframe-m" src="https://ertan-fird.github.io/work_14/" width="239px" height="510px"></iframe>`;
// 	console.log("work");
// 	document.querySelector("#loader-m").style.display = 'flex'
// 	document.querySelector("#loader-m").style.left = '33.335%';
// 	document.querySelector('#comment-14-m').style.left = '33.335%';
// };

//СКРОЛ ШАПКА
var scrolled;
window.onscroll = function() {
	if (screen.width<1024) {
		$(".section-1__header").css({"background": "#676767"})
		$(".section-1__nav").css({"color":"#fff"})
	} else{
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled < 200){
			$(".section-1__header").css({"background": "none"})
			$(".section-1__nav").css({"color":"#000"})
		}
		if(200 < scrolled){
		$(".section-1__header").css({"background": "#676767"})
		$(".section-1__nav").css({"color":"#fff"})
		}
	}
}

//БУРГЕР
$(document).ready(function() {
	$('.burger').click(function(e) {
		$('.nav, .burger, .logo').addClass("active");
		e.stopPropagation();
	});
	$(document).click(function(){
		$('.nav, .burger, .logo').removeClass("active");
	});
});

//СКРОЛ КОЛЕСОМ
(function() {
var delay = false;

$(document).on('mousewheel DOMMouseScroll', function(event) {
	event.preventDefault();
	if(delay) return;

	delay = true;
	setTimeout(function(){delay = false},350)

	var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

	var a= document.getElementsByClassName('anchor');
	if(wd < 0) {
		for(var i = 0 ; i < a.length ; i++) {
		var t = a[i].getClientRects()[0].top;
		if(t >= 40) break;
		}
	}else {
		for(var i = a.length-1 ; i >= 0 ; i--) {
		var t = a[i].getClientRects()[0].top;
		if(t < -20) break;
		}
	}
	if(i >= 0 && i < a.length) {
		$('html,body').animate({
		scrollTop: a[i].offsetTop
		}, 350);
	}
	});
})();



//СКРОЛ ПО КНОПКАМ
$('.scroll').click(function(e) {
	var url = this.href;
	var urlHash = this.hash;
	var parts = url.split('#');
	var trgt = parts[1];
	var target_offset = $('#'+trgt).position();
	var target_top = target_offset.top;

	$('html, body').animate({
		scrollTop:target_top
	}, 350);
});
