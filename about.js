const openMenu = document.querySelector('.menu-sub');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-btn');

// Open Menu
function open(event) {
  if (event.target) {
    openMenu.style.display = 'block';
    close.style.display = 'block';
  }
}
menu.addEventListener('click', open);

// Close menu
function closeMenu(event) {
  if (event.target) {
    openMenu.style.display = 'none';
    close.style.display = 'none';
  }
}
close.addEventListener('click', closeMenu);
