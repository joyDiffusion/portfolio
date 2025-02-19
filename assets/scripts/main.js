// Toggle menu button icons state from "hidden" to "block"
const menuBtn = document.getElementById('menu-btn');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuClosedIcon = document.getElementById('menu-closed-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', (e) => {
  if (menuClosedIcon.classList.contains('block')) {
    menuClosedIcon.classList.replace('block', 'hidden');
    menuOpenIcon.classList.replace('hidden', 'block');
  } else {
    menuClosedIcon.classList.replace('hidden', 'block');
    menuOpenIcon.classList.replace('block', 'hidden');
  }

  mobileMenu.classList.toggle('hidden');
});
