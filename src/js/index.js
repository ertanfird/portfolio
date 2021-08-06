//import
import '../scss/main.scss';
import $ from 'jquery';
import 'slick-carousel';
import './vendor/slick.min.js';
import './vendor/particles';
//import '../../node_modules/normalize/lib/normalize'

//variables
global.jQuery = $;
global.$ = $;

//ЗАГРУЗКА
$(window).on('load', function () {
  var $preloader = $('#loader');
  $preloader.delay(6000).fadeOut('slow');
  countCurrentWork();
  countWorks();
  $sliderWork.on('swipe', function(event, slick, direction){
    countCurrentWork();
  });
  $('.works__covers-mobile').on('swipe', function(event, slick, direction){
    countCurrentWork();
  });
  $workArrow.on('click', function() {
    countCurrentWork();
  });
});

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 7,
        "density": {
          "enable": true,
          "value_area": 100
        }
      },
      "color": {
        "value": "#030c14"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#030c14"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0.2,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 180,
        "color": "#030c14",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 60,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "red",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

const btnShowWorks = document.querySelector('#showWorks');
const articleResume = document.querySelector('.resume');
const articleBash = document.querySelector('.bash');
const sectionWorks = document.querySelector('.works');


//showWorks
let showWorks = function () {
  if (btnShowWorks.classList.contains('active')) {
    btnShowWorks.style.top = "80%";
    btnShowWorks.style.left = "28%";
    btnShowWorks.style.background = "#f6f6f6";
    btnShowWorks.style['boxShadow'] = "0px 4px 8px rgba(0, 0, 0, 0.25);";
    btnShowWorks.innerHTML = "SEE MY WORKS";
    articleBash.style.top = "6%";
    articleResume.style.right = "28%";
    sectionWorks.style.top = "105%";
  } else {
    btnShowWorks.style.top = "0";
    btnShowWorks.style.left = "6%";
    btnShowWorks.style.background = "none";
    btnShowWorks.style['boxShadow'] = "none";
    btnShowWorks.innerHTML = "← BACK";
    articleBash.style.top = "-100%";
    articleResume.style.right = "-50%";
    sectionWorks.style.top = "8%";
  };
  $('#showWorks').toggleClass('active');
};

btnShowWorks.onclick = showWorks;

//slyderWorks
const websites = [
  "https://mirror-test.000webhostapp.com/index.php",
  "https://north-crimea.ru",
  "https://ertanfird.github.io/porten/",
  "https://ertanfird.github.io/tastyshop/",
  "https://ironman-test.000webhostapp.com/"
];
const websitesMobile = [
  "https://mirror-test.000webhostapp.com/index.php",
  "https://north-crimea.ru",
  "https://ertan-fird.github.io/work_13/",
  "https://ertan-fird.github.io/work_14/",
  "https://ironman-test.000webhostapp.com/"
];
const $frame = $(".works__frame");
const $frameM = $(".works__frame-mobile")
const $sliderWork = $(".works__covers");
const $sliderMobile = $(".works__covers-mobile");
let currentWorksArray = document.querySelectorAll('.works__item');
const worksCount = document.querySelector('#countWorks');
let $allWorks = String(websites.length);
let currentWork;
let currentWorkLink;
let $workArrow = $('.works__arrow');
const workslink = document.querySelector('#worksLink');
const workslink2 = $('#worksLink');
const decktop = $('.works__desktop');
const mobile = $('.works__mobile');

$sliderWork.slick({
  arrows: true,
  appendArrows: ".works__covers",
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  asNavFor: ".works__covers-mobile",
});

workslink2.on('click', function(e) {
  e.preventDefault();
  window.open(e.target.href, '_blank');
});

let countCurrentWork = function() {
  for (let i = 0; i < currentWorksArray.length; i++) {
    if(currentWorksArray[i].classList.contains('slick-active')) {
      currentWork = i+1;
      currentWorkLink = websites[i];
      countWorks();
      changeWorksLink();
      return currentWork, currentWorkLink;
    };
  };
};

let changeWorksLink = function () {
    workslink.innerHTML = `${currentWorkLink}`;
    workslink2.attr("href", currentWorkLink);
};

let countWorks = function() {
  worksCount.innerHTML = `${currentWork} / ${$allWorks}`;
};

$sliderWork.on("click", ".works__item", function (e) {
  const $index = $(this).data("index");

  $frame.attr("src", websites[$index]);
  $frame.fadeIn(200);
});

$sliderWork.on("beforeChange", () => {
  $frame.fadeOut(400);
});

$sliderMobile.slick({
  arrows: false,
  asNavFor: ".works__covers"
});

$sliderMobile.on("click", ".works__item-mobile", function (e) {
  const $index = $(this).data("index");

  $frameM.attr("src", websites[$index]);
  $frameM.fadeIn(200);
});

$sliderMobile.on("beforeChange", () => {
  $frameM.fadeOut(400);
});
