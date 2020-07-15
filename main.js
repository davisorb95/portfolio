const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.portrait-header__menu');
const mediaQuery = window.matchMedia('screen and (max-width: 768px');

const showHideMenu = () => {
  if (menu) menu.classList.toggle('is-active');
};

if (mediaQuery.matches) {
  burgerButton.addEventListener('click', showHideMenu);
}

mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    burgerButton.addEventListener('click', showHideMenu);
  } else {
    burgerButton.removeEventListener('click', showHideMenu);
  }
});
