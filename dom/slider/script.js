const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider__item");

const sliderWidth = slider.offsetWidth;
const slideWidth = slides[0].offsetWidth;
const marginMax = slides.length * -1 * slideWidth + sliderWidth;
const marginMin = 0;
let marginActual = parseInt(
  window.getComputedStyle(slides[0]).marginLeft.slice(0, -2)
);
slides[0].style.marginLeft = marginActual;

console.log(marginActual);
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");

leftButton.addEventListener("click", function () {
  if (marginActual < 0) {
    marginActual += slideWidth;
    slides[0].style.marginLeft = marginActual + "px";
    if (marginActual == 0) {
      leftButton.classList.remove("arrow_active");
    } else {
      leftButton.classList.add("arrow_active");
    }
  }
});

rightButton.addEventListener("click", function () {
  if (marginActual > marginMax) {
    marginActual -= slideWidth;
    slides[0].style.marginLeft = marginActual + "px";
    rightButton.classList.add("arrow_active");
    if (marginActual == marginMax) {
      rightButton.classList.remove("arrow_active");
    } else {
      rightButton.classList.add("arrow_active");
    }
  }
});
