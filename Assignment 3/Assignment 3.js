let openBtn = document.querySelector('.openModalBtn');
let overlay = document.getElementById('modalOverlay');
let closeBtn = document.querySelector('.close-btn');

// Mở modal
openBtn.onclick = function () {
  overlay.style.display = 'flex';
};

// Đóng modal (nút x)
closeBtn.onclick = function () {
  overlay.style.display = 'none';
};

// Đóng modal (click vào nền tối)
overlay.onclick = function (event) {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
};