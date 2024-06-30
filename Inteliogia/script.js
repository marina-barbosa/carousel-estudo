// 1800 600
// 1400 600
//  https://www.youtube.com/watch?v=sk7mgXO-FeQ

const radio = document.querySelector('.manual-btn');

let count = 1;

document.getElementById('radio1').checked = true;


setInterval(() => {
  proximaImg();
}, 5000)

function proximaImg() {
  count++;

  if (count > 3) {
    count = 1;
  }

  document.getElementById('radio' + count).checked = true;
}