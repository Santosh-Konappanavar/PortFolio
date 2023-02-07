const dropDown = document.querySelector('.dropdown');
const mobileMenu = document.querySelector('.mobileMenu');

const immage = document.querySelector('.immage');
dropDown.addEventListener('click', () => {
  dropDown.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  immage.classList.toggle('active');
});

document.querySelectorAll('.menu-items').forEach((i) => i.addEventListener('click', () => {
  dropDown.classList.remove('active');
  mobileMenu.classList.remove('active');
  immage.classList.remove('active');
}));