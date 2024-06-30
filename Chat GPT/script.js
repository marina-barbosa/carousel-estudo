const carousel = document.querySelector('.carousel');
// cria um array com os filhos do elemento 'carousel'
const items = Array.from(carousel.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
// pega largura de um item no carousel - getBoundingClientRect() retorna objeto com dimensão e posição do elemento
const itemWidth = items[0].getBoundingClientRect().width;
// define a posição de cada item com base no índice
items.forEach((item, index) => {
  item.style.left = itemWidth * index + 'px';   // Define a posição 'left' de cada item
});



function moveToSlide(carousel, currentItem, targetItem) {
  // muda a posição do carrossel para a posição do item alvo
  carousel.style.transform = 'translateX(-' + targetItem.style.left + ')';
  currentItem.classList.remove('current-item');
  targetItem.classList.add('current-item');
};


function nextItem() {
  const currentItem = carousel.querySelector('.current-item');
  // seleciona o próximo item no carrossel
  const nextItem = currentItem.nextElementSibling;

  if (nextItem) {
    moveToSlide(carousel, currentItem, nextItem);
  } else {
    firstItem = carousel.firstElementChild;
    moveToSlide(carousel, currentItem, firstItem);
  }
};

function prevItem() {
  const currentItem = carousel.querySelector('.current-item');
  // seleciona o item anterior no carrossel
  const prevItem = currentItem.previousElementSibling;

  if (prevItem) {
    moveToSlide(carousel, currentItem, prevItem);
  } else {
    const lastItem = carousel.lastElementChild;
    moveToSlide(carousel, currentItem, lastItem);
  }
};

