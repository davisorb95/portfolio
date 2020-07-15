const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.portrait-header__menu');
const mediaQuery = window.matchMedia('screen and (max-width: 768px');

const showHideMenu = () => {
  if (menu) menu.classList.toggle('is-active');
};

const validationMatch = (event) => {
  if (event.matches) {
    burgerButton.addEventListener('click', showHideMenu);
  } else {
    burgerButton.removeEventListener('click', showHideMenu);
  }
};

validationMatch(mediaQuery);

mediaQuery.addEventListener('change', (event) => validationMatch(event));
