const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");

let presentSlideIndex = sliderItems.findIndex((elem) => {
  if (elem.className === "slider__item slider__item_active") {
    return true;
  }
});

sliderDots[presentSlideIndex].className = "slider__dot slider__dot_active";

const sliderControler = function (inputSlideIndex) {
  let newSlideIndex;

  sliderDots[presentSlideIndex].className = "slider__dot";
  sliderItems[presentSlideIndex].className = "slider__item";

  if (inputSlideIndex > sliderItems.length - 1) {
    newSlideIndex = 0;
  } else if (inputSlideIndex < 0) {
    newSlideIndex = sliderItems.length - 1;
  } else {
    newSlideIndex = inputSlideIndex;
  }

  sliderItems[newSlideIndex].className = "slider__item slider__item_active";
  sliderDots[newSlideIndex].className = "slider__dot slider__dot_active";
  presentSlideIndex = newSlideIndex;
};

sliderDots.forEach((elem, index) => {
  elem.onclick = function () {
    sliderControler(index);
  };
});

sliderArrowNext.onclick = function () {
  sliderControler(presentSlideIndex + 1);
};

sliderArrowPrev.onclick = function () {
  sliderControler(presentSlideIndex - 1);
};