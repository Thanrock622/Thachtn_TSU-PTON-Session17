let btnToggle = document.querySelector('.btnToggle');

btnToggle.onclick = function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    btnToggle.textContent = 'Toggle light mode';
  } else {
    btnToggle.textContent = 'Toggle dark mode';
  }
};