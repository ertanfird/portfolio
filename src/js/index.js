//import
import '../scss/main.scss';
import $ from 'jquery';
import 'slick-carousel';
import './vendor/slick.min.js';
import './vendor/particles';
//import '../../node_modules/normalize/lib/normalize'

//my modules
//----------------

//variables
global.jQuery = $;
global.$ = $;
//variables
const btnShowWorks = document.querySelector('#showWorks');
const articleResume = document.querySelector('.resume');
const articleBash = document.querySelector('.bash');
const sectionWorks = document.querySelector('.works');
const websites = [
  "https://mirror-test.000webhostapp.com/index.php",
  "https://north-crimea.ru",
  "https://ertanfird.github.io/porten/",
  "https://ertanfird.github.io/tastyshop/",
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
const desktop = document.querySelector('.works__desktop');
const mobile = $('.works__mobile');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let responsivePoint = windowWidth / windowHeight;
const resume = document.querySelector('.resume');
const resumeShow = document.querySelector('.resume__show');


//ЗАГРУЗКА
$(window).on('load', function () {
  var $preloader = $('#loader');
  $preloader.delay(6000).fadeOut('slow');
  countCurrentWork();
  countWorks();
  $sliderWork.on('swipe', function (event, slick, direction) {
    countCurrentWork();
  });
  $('.works__covers-mobile').on('swipe', function (event, slick, direction) {
    countCurrentWork();
  });
  $workArrow.on('click', function () {
    countCurrentWork();
  });
});

particlesJS('particles-js', require('./particles.json'));

//responsive
switch (true) {
  case (responsivePoint > 1.7):
    resumeShow.style.display = "none";
    resume.classList.remove('resume-mobile');
    resume.classList.remove('resume-tablet');
    break;
  case (responsivePoint > 1.38):
    console.log(">1.3");
    console.log(responsivePoint);
    resume.classList.add('resume-tablet');
    resume.classList.remove('resume-mobile');
    break;
  case (responsivePoint > 0.1):
    console.log("<1.3");
    console.log(responsivePoint);
    desktop.style.display = "none";
    resume.classList.add('resume-mobile');
    resume.classList.remove('resume-tablet');
    articleBash.style.left = "-80%";
    btnShowWorks.style.left = "-80%";
    break;
  default:
    alert("Error");
    alert(responsivePoint);
    break;
};

//showResume
resumeShow.onclick = function () {
  switch (true) {
    case (responsivePoint > 1.7):
      resumeShow.style.display = "none";
      break;
    case (responsivePoint > 1.38):
      if (resumeShow.classList.contains('active')) {
        resume.style.right = "-20px";
        resumeShow.innerHTML = '>';
      } else {
        resume.style.right = "-440px";
        resumeShow.innerHTML = '<';
      }
      $('.resume__show').toggleClass('active');
      break;
    case (responsivePoint > 0.1):
      if (resumeShow.classList.contains('active')) {
        resume.style.right = "-20px";
        resumeShow.innerHTML = '>';
        articleBash.style.left = "-80%";
        btnShowWorks.style.left = "-80%";
      } else {
        resume.style.right = "calc(-100% - 60px)";
        resumeShow.innerHTML = '<';
        articleBash.style.left = "50%";
        btnShowWorks.style.left = "50%";
      }
      $('.resume__show').toggleClass('active');
      break;
    default:
      alert("Error");
      alert(responsivePoint);
      break;
  };
};



//showWorks
let showWorks = function () {
  switch (true) {
    case (responsivePoint > 1.7):
      if (btnShowWorks.classList.contains('active')) {
        btnShowWorks.innerHTML = "SEE MY WORKS";
        articleBash.style.top = "6%";
        articleResume.style.right = "4%";
        sectionWorks.style.top = "105%";
      } else {
        btnShowWorks.innerHTML = "← BACK";
        articleBash.style.top = "-100%";
        articleResume.style.right = "-480px";
        sectionWorks.style.top = "8%";
      };
      $('#showWorks').toggleClass('active');
      break;
    case (responsivePoint > 1.38):
      if (btnShowWorks.classList.contains('active')) {
        btnShowWorks.innerHTML = "SEE MY WORKS";
        articleBash.style.top = "6%";
        articleResume.style.right = "-20px";
        sectionWorks.style.top = "105%";
      } else {
        btnShowWorks.innerHTML = "← BACK";
        articleBash.style.top = "-100%";
        articleResume.style.right = "-480px";
        sectionWorks.style.top = "8%";
      };
      $('#showWorks').toggleClass('active');
      break;
    case (responsivePoint > 0.1):
      if (btnShowWorks.classList.contains('active')) {
        btnShowWorks.style.left = "50%";
        btnShowWorks.innerHTML = "SEE MY WORKS";
        articleBash.style.top = "6%";
        articleResume.style.right = "calc(-100% - 60px)";
        sectionWorks.style.top = "105%";
      } else {
        btnShowWorks.style.left = "6%";
        btnShowWorks.innerHTML = "← BACK";
        articleBash.style.top = "-100%";
        articleResume.style.right = "calc(-100% - 100px)";
        sectionWorks.style.top = "8%";
      };
      $('#showWorks').toggleClass('active');
      break;
    default:
      alert("Error");
      alert(responsivePoint);
      break;
  };
};

btnShowWorks.onclick = showWorks;

//slyderWorks
$sliderWork.slick({
  arrows: true,
  appendArrows: ".works__covers",
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  asNavFor: ".works__covers-mobile",
});

workslink2.on('click', function (e) {
  e.preventDefault();
  window.open(e.target.href, '_blank');
});

let countCurrentWork = function () {
  for (let i = 0; i < currentWorksArray.length; i++) {
    if (currentWorksArray[i].classList.contains('slick-active')) {
      currentWork = i + 1;
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

let countWorks = function () {
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
