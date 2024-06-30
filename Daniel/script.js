
//  https://www.youtube.com/watch?v=1FSmHr934OI

const slider = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('#prev-button');
const btnNext = document.querySelector('#next-button');
let currentSlide = 0;

function hideSlide() {
  slider.forEach((item) => item.classList.remove('active'));
}

function showSlide() {
  slider[currentSlide].classList.add('active');
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlide();
}

function prevSlide() {
  hideSlide();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlide();
}

btnPrev.addEventListener('click', nextSlide);
btnNext.addEventListener('click', prevSlide);