let navMain = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-header__toogle');
let footerFrame = document.querySelector('.main-footer__frame');

navMain.classList.remove('main-nav__wrapper--nojs');
navToggle.classList.remove('main-header__toogle--nojs');
footerFrame.classList.remove('main-footer__frame--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav__wrapper--closed');
    navMain.classList.add('main-nav__wrapper--open');
    navToggle.classList.remove('main-header__toogle--closed');
    navToggle.classList.add('main-header__toogle-open');
  } else {
    navMain.classList.add('main-nav__wrapper--closed');
    navMain.classList.remove('main-nav__wrapper--open');
    navToggle.classList.add('main-header__toogle--closed');
    navToggle.classList.remove('main-header__toogle-open');
  }
});

window.addEventListener('load', () => {
  document.documentElement.classList.add('has-js')
})
