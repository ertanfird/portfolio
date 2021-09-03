//import
import '../scss/main.scss';
import $ from 'jquery';
import 'slick-carousel';
import './vendor/slick.min.js';
import './vendor/particles';
//import '../../node_modules/normalize/lib/normalize'

//my modules
//===================================================//

//variables
global.jQuery = $;
global.$ = $;
//variables
const btnShowWorks = document.querySelector('#showWorks');
const bash = document.querySelector('.bash');
const sectionWorks = document.querySelector('.works');
const websites = [
  "https://mirror-test.000webhostapp.com/index.php",
  "https://north-crimea.ru",
  "https://ertanfird.github.io/porten/",
  "https://ertanfird.github.io/tastyshop/",
  "https://ironman-test.000webhostapp.com/"
];
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
const mobile = document.querySelector('.works__mobile');
const worksDisplay = document.querySelector('.works__display');
let responsivePoint = window.innerWidth / window.innerHeight;
const resume = document.querySelector('.resume');
const resumeShow = document.querySelector('.resume__show');
//===================================================//

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
//===================================================//

//responsive
let responsive = function () {
  switch (true) {
    case (responsivePoint > 1.7):
      resumeShow.style.display = "none";
      resume.classList.remove('resume-mobile');
      resume.classList.remove('resume-tablet');
      if (btnShowWorks.classList.contains('active') == 0) {
        resume.classList.remove('resume-hide');
        resume.classList.remove('resume-hide-mobile');
      };
      bash.classList.remove('bash-mobile');
      bash.classList.remove('bash-tablet');
      btnShowWorks.classList.remove('button-mobile');
      desktop.style.display = "flex";
      worksDisplay.style["justify-content"] = "space-around";
      particlesJS('particles-js', require('./particles.json'));
      break;
    case (responsivePoint > 1.3):
      console.log(">1.3");
      console.log(responsivePoint);
      resumeShow.style.display = "flex";
      resume.classList.add('resume-tablet');
      resume.classList.remove('resume-mobile');
      bash.classList.add('bash-tablet');
      bash.classList.remove('bash-mobile');
      btnShowWorks.classList.add('button-mobile');
      desktop.style.display = "flex";
      break;
    default:
      console.log("<1.3");
      console.log(responsivePoint);
      resumeShow.style.display = "flex";
      resume.classList.add('resume-mobile');
      resume.classList.remove('resume-tablet');
      if (btnShowWorks.classList.contains('active') == 0) {
        resume.classList.remove('resume-hide');
        resume.classList.remove('resume-hide-mobile');
        resumeShow.classList.remove('active');
        resumeShow.innerHTML = 'Hide';
      }else {
        resume.classList.remove('resume-hide');
        resume.classList.add('resume-hide-mobile');
      };
      bash.classList.add('bash-mobile');
      bash.classList.remove('bash-tablet');
      btnShowWorks.classList.add('button-mobile');
      worksDisplay.style["justify-content"] = "center";
      desktop.style.display = "none";
      break;
  };
};

responsive();
window.addEventListener('resize', function () {
  responsivePoint = window.innerWidth / window.innerHeight;
  responsive(); 
}, true);
//===================================================//

//showResume
let showResume = function () {
  responsivePoint = window.innerWidth / window.innerHeight;
  if (responsivePoint > 1.3) {
    if (resumeShow.classList.contains('active')) {
      resume.classList.remove('resume-hide');
      resumeShow.innerHTML = 'Hide';
    } else {
      resume.classList.add('resume-hide');
      resumeShow.innerHTML = 'Show';
    };
  }else {
    if (resumeShow.classList.contains('active')) {
      resume.classList.remove('resume-hide-mobile');
      resumeShow.innerHTML = 'Hide';
    } else {
      resume.classList.add('resume-hide-mobile');
      resumeShow.innerHTML = 'Show';
    };
  };
  $('.resume__show').toggleClass('active');
};

resumeShow.onclick = showResume;
//===================================================//

//showWorks
let showWorks = function () {
  responsivePoint = window.innerWidth / window.innerHeight;
  if (btnShowWorks.classList.contains('active')) {
    resumeShow.classList.add('active');
    resumeShow.innerHTML = "Show"
    btnShowWorks.innerHTML = "SEE WORKS";
    bash.style.top = "6%";
    switch (true) {
      case (responsivePoint > 1.7):
        resume.classList.remove('resume-hide');
        resume.classList.remove('resume-hide-mobile');
        sectionWorks.style.top = "105%";
        break;
      case (responsivePoint > 1.3):
        resume.classList.add('resume-hide');
        resume.classList.remove('resume-hide-mobile');
        sectionWorks.style.top = "105%";
        break;
      default:
        sectionWorks.style.top = "105%";
        resume.classList.remove('resume-hide');
        break;
    };
  } else {
    resumeShow.classList.remove('active');
    btnShowWorks.innerHTML = "← BACK";
    bash.style.top = "-100%";
    switch (true) {
      case (responsivePoint > 1.7):
        resume.classList.add('resume-hide');
        sectionWorks.style.top = "8%";
        break;
      case (responsivePoint > 1.3):
        resume.classList.add('resume-hide');
        sectionWorks.style.top = "4%";
        break;
      default:
        resume.classList.add('resume-hide-mobile');
        sectionWorks.style.top = "4%";
        break;
    };
  };
  $('#showWorks').toggleClass('active');
};

btnShowWorks.onclick = showWorks;
//===================================================//

//slyderWorks
$sliderWork.slick({
  arrows: true,
  appendArrows: ".works__covers",
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  asNavFor: ".works__covers-mobile",
});

$sliderMobile.slick({
  arrows: false,
  asNavFor: ".works__covers"
});
//===================================================//

//newTabOpen
workslink2.on('click', function (e) {
  e.preventDefault();
  window.open(e.target.href, '_blank');
});
//===================================================//

//countCurrentWork
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
//===================================================//

//frameOpen
$sliderWork.on("click", ".works__item", function (e) {
  const $index = $(this).data("index");

  desktop.insertAdjacentHTML(
    "afterbegin",
    `<iframe src="${websites[$index]}" frameborder="0" class="works__frame"></iframe>`
  );
});

$sliderMobile.on("click", ".works__item-mobile", function (e) {
  const $index = $(this).data("index");

  if (responsivePoint <= 1.3) {
    window.open(`${websites[$index]}`, '_blank');
  } else {
    mobile.insertAdjacentHTML(
      "afterbegin",
      `<iframe src="${websites[$index]}" frameborder="0" class="works__frame-mobile"></iframe>`
    );
  }
});
//===================================================//

//frameClose
$sliderWork.on("beforeChange", () => {
  const $frame = document.querySelector(".works__frame");
  if ($frame !== null) {
    $frame.remove();
  };
});

$sliderMobile.on("beforeChange", () => {
  const $frameM = document.querySelector(".works__frame-mobile");
  if (responsivePoint > 1.3) {
    if ($frameM !== null) {
      $frameM.remove();
    };
  }
});
//===================================================//
