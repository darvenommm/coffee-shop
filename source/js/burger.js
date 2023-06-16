{
  const closedMenuButtonClass = 'header__burger--closed-menu';
  const hiddenMenuClass = 'header__navigation--hidden';

  const root = document.querySelector('.header');
  const button = root.querySelector('.header__burger');
  const menu = root.querySelector('.header__navigation');

  const TABLET_WIDTH = 768;

  button.addEventListener('click', () => {
    button.classList.toggle(closedMenuButtonClass);
    menu.classList.toggle(hiddenMenuClass);
  });

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= TABLET_WIDTH) {
      menu.classList.remove(hiddenMenuClass);
      button.classList.remove(closedMenuButtonClass);
    } else {
      button.classList.add(closedMenuButtonClass);
      menu.classList.add(hiddenMenuClass);
    }
  });

  if (window.innerWidth < TABLET_WIDTH) {
    button.classList.add(closedMenuButtonClass);
    menu.classList.add(hiddenMenuClass);
  }
}
