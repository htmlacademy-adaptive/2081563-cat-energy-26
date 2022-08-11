let navMain = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-nav__toogle');

navToggle.classList.remove('main-nav__toogle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav__wrapper--closed');
    navMain.classList.add('main-nav__wrapper--open');
  } else {
    navMain.classList.add('main-nav__wrapper--closed');
    navMain.classList.remove('main-nav__wrapper--open');
  }
});
