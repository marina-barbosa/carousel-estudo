// Glide.js
// https://glidejs.com/


document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 2000
  }).mount();
});