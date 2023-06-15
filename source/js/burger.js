{
  const closedMenuButtonClass = 'header__burger--closed-menu';
  const hiddenMenuClass = 'header__navigation--hidden';

  const root = document.querySelector('.header');
  const button = root.querySelector('.header__burger');
  const menu = root.querySelector('.header__navigation');

  button.addEventListener('click', () => {
    button.classList.toggle(closedMenuButtonClass);
    menu.classList.toggle(hiddenMenuClass);
  });

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= 768) {
      button.classList.add(closedMenuButtonClass);
      menu.classList.add(hiddenMenuClass);
    }
  });

  button.classList.add(closedMenuButtonClass);
  menu.classList.add(hiddenMenuClass);
}
