let navMain = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-nav__toogle');

navMain.classList.remove('main-nav__wrapper--nojs');
navToggle.classList.remove('main-nav__toogle--nojs');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav__wrapper--closed');
    navMain.classList.add('main-nav__wrapper--open');
    navToggle.classList.remove('main-nav__toogle--closed');
    navToggle.classList.add('main-nav__toogle-open');
  } else {
    navMain.classList.add('main-nav__wrapper--closed');
    navMain.classList.remove('main-nav__wrapper--open');
    navToggle.classList.add('main-nav__toogle--closed');
    navToggle.classList.remove('main-nav__toogle-open');
  }
});

window.addEventListener('load', () => {
  document.documentElement.classList.add('has-js')
})
