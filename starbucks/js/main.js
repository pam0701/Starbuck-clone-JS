// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// NOTICE > SWIPER
const swiperNotice = new Swiper(".notice .notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// PROMOTION > SWIPER
const swiperPromotion = new Swiper(".promotion .swiper", {
  direction: "horizontal", // 기본
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteration: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

// SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoplay() {
  if (swiperNotice.autoplay.running) swiperNotice.autoplay.stop();
  else swiperNotice.autoplay.start();
}

// TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide"))
    promotionEl.classList.remove("hide");
  else promotionEl.classList.add("hide");

  if (promotionToggleBtn.style.transform === "rotate(180deg)")
    promotionToggleBtn.style.transform = "rotate(0deg)";
  else promotionToggleBtn.style.transform = "rotate(180deg)";
});

// SCROLL ANIMATION
window.addEventListener("scroll", function () {
  let scrollYPos = window.scrollY;
  const peru = document.querySelector(".peru");
  const indonesia = document.querySelector(".indonesia");
  const favorite = document.querySelector(".favorite");
  const magazine = document.querySelector(".magazine");
  const store = document.querySelector(".store");

  if (scrollYPos > 500) peru.classList.add("animate");
  else if (scrollYPos < 500 && peru.classList.contains("animate"))
    peru.classList.remove("animate");

  if (scrollYPos > 900) indonesia.classList.add("animate");
  else if (scrollYPos < 900 && indonesia.classList.contains("animate"))
    indonesia.classList.remove("animate");

  if (scrollYPos > 1600) favorite.classList.add("animate");
  else if (scrollYPos < 1600 && favorite.classList.contains("animate"))
    favorite.classList.remove("animate");

  if (scrollYPos > 2200) magazine.classList.add("animate");
  else if (scrollYPos < 2200 && magazine.classList.contains("animate"))
    magazine.classList.remove("animate");

  if (scrollYPos > 2600) store.classList.add("animate");
  else if (scrollYPos < 2600 && store.classList.contains("animate"))
    store.classList.remove("animate");
});

window.onload = function () {
  document.querySelector(".visual .inner").classList.add("animate");
};
