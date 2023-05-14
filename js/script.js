let images = [{
  url: "./images/banner/banner1.jpg",
}, {
  url: "./images/banner/banner2.jpg",
}, {
  url: "./images/banner/banner3.jpg"
}];

function initSlider(images, options) {
if (!images || !images.length) return;

options = options || {
  dots: false,
  autoplay: false,
  autoplayInterval: 5000
}

const sliderWrapper = document.querySelector(".slider");
const sliderImages = sliderWrapper.querySelector(".bannerImages");
const sliderArrows = sliderWrapper.querySelector(".slider__arrows");

initImages();
initArrows();

if (options.dots) {
  initDots();
}

if (options.autoplay) {
  initAutoplay();
}

function initImages() {
  images.forEach((image, index) => {
    let imageElement = document.createElement("div");
    imageElement.className = `image n${index} ${index? "" : "active"}`;
    imageElement.dataset.index = index;
    imageElement.style.backgroundImage = `url(${image.url})`;
    sliderImages.appendChild(imageElement);
  });
}

function initArrows() {
  let lastIndex = images.length - 1;
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? lastIndex : curNumber - 1;
      } else {
        nextNumber = curNumber === lastIndex? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(`.n${num}`).classList.add("active");

  if (options.dots) {
    let dotsWrapper = document.querySelector(".slider__dots");
    dotsWrapper.querySelector(".active").classList.remove("active");
    dotsWrapper.querySelector(`.n${num}`).classList.add("active");
  }
}

function initDots() {
  let dotsWrapper = document.createElement("div");
  dotsWrapper.className = "slider__dots";
  images.forEach((image, index) => {
    let dot = document.createElement("div");
    dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
    dot.dataset.index = index;
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    });
    dotsWrapper.appendChild(dot);
  });
  sliderWrapper.appendChild(dotsWrapper);
}

function initAutoplay() {
  setInterval(() => {
    let currentNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
    moveSlider(nextNumber);
  }, options.autoplayInterval);
}
}

document.addEventListener("DOMContentLoaded", () => {
let sliderOptions = {
  dots: true,
  autoplay: true,
  autoplayInterval: 5000
}
initSlider(images, sliderOptions);
});