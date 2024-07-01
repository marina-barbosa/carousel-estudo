// Glide.js
// https://glidejs.com/
// https://www.youtube.com/watch?v=SycW2orT548


document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 2000
  }).mount();
});