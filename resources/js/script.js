const hamburgerIcon = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburgerIcon.addEventListener('click', () => {
  menu.classList.remove('initial');
  if (menu.classList.contains('closed')) {
    menu.classList.remove('closed');
    menu.classList.add('open');
  } else if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menu.classList.add('closed');
  }
})