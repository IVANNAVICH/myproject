const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");
const closeButton = $(".close-button");
const dealBtn = $(".deal-btn");
const addBlock = $(".add-block");


$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);
$(document).on("click", ".close-button", handleMenu);
$(document).on("click", ".dark-overlay", handleMenu);
$(document).on("click", ".deal-btn", handleAdd);
$(document).on("click", ".add-block", handleBtn);

$('.my-links').click(function (){
  $('.mobile-menu, .dark-overlay').toggleClass("visible");
});

function handleAdd(e) {
  e.preventDefault();
  addBlock.toggleClass("visible");
}

function handleBtn(e) {
  e.preventDefault();
  dealBtn.toggleClass("visible");
}

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
}

function resetMobileMenu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation .has-submenu").removeClass("opened").find("ul").hide();
}

// console.log("TEST");

$("#slider1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 8000,
  infinity: true,
  arrows: false,
  mobileFirst: true,
  adaptiveHeight: true,
  dots: true,
  appendDots: '.slide__swiper',
  dotsClass: 'slide__swiper-span'
});

$("#slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 10000,
  arrows: true,
  appendArrows: '.slider2__buttons',
  prevArrow: '<span class="slider2__button slider2__prev"></span>',
  nextArrow: '<span class="slider2__button slider2__next"></span>',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    
  ]
});

$("#slider3").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinity: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 4000,
  arrows: false,
  
});

const scroll = new SmoothScroll('a[href*="#top"]', {
  header: "[slider1]"
});


// =========================
function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

// =================================


