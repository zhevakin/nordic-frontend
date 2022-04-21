function init() {
  let index = 0;
  const slides = document.querySelectorAll(".slider-item");
  const sliderNext = document.querySelector(".slider-next");
  const sliderPrev = document.querySelector(".slider-prev");
  const sliderPagination = document.querySelector(".slider-pagination");

  const showSlider = (idx) => {
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    slides[idx].classList.add("active");
    updatePagination(idx);
  };

  const updatePagination = (idx) => {
    sliderPagination.textContent = `${idx + 1}/${slides.length}`;
  };

  sliderNext.addEventListener("click", () => {
    index = index < slides.length - 1 ? index + 1 : 0;
    showSlider(index);
  });

  sliderPrev.addEventListener("click", () => {
    index = index > 0 ? index - 1 : slides.length - 1;
    showSlider(index);
  });

  showSlider(0);
}

window.onload = init;
