let boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
  boxes[i].onmouseover = function () {
    let color = window.getComputedStyle(this).backgroundColor;
    document.body.style.backgroundColor = color;
  };
}