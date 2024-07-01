
// https://www.youtube.com/watch?v=oM1_SlB2OpY


let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('#magic-slider-001')
let sliderList = slider.querySelector('#magic-slider-001 .list')
let thumb = document.querySelector('#magic-slider-001 .thumb')
let thumbItems = thumb.querySelectorAll('.item')

thumb.appendChild(thumbItems[0])

// Function for next button 
nextBtn.onclick = function () {
  moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function () {
  moveSlider('prev')
}


function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll('.item')
  let thumbItems = document.querySelectorAll('.thumb .item')

  if (direction === 'next') {
    sliderList.appendChild(sliderItems[0])
    thumb.appendChild(thumbItems[0])
    slider.classList.add('next')
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1])
    thumb.prepend(thumbItems[thumbItems.length - 1])
    slider.classList.add('prev')
  }


  slider.addEventListener('animationend', function () {
    if (direction === 'next') {
      slider.classList.remove('next')
    } else {
      slider.classList.remove('prev')
    }
  }, { once: true }) // Remove the event listener after it's triggered once
}