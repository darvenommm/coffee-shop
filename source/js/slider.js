{
  const rootClasses = ['hero--flat-white', 'hero--lavender', 'hero--espresso'];
  const activeSlideClass = 'hero__item--active';
  const activePaginationButtonClass = 'hero__pagination-button--active';

  const root = document.querySelector('.hero');
  const slides = root.querySelectorAll('.hero__item');
  const slidesLength = slides.length;
  const prevButton = root.querySelector('.hero__previous');
  const nextButton = root.querySelector('.hero__next');
  const paginationButtons = root.querySelectorAll('.hero__pagination-button');

  let currentSlideIndex = 0;

  // root
  const cleanRootClasses = () => {
    rootClasses.forEach((className) => {
      root.classList.remove(className);
    });
  };

  const setRootClass = (index) => {
    cleanRootClasses();

    root.classList.add(rootClasses[index]);
  };

  // slide helpers
  const nowFirstSlide = () => {
    return currentSlideIndex === 0;
  };

  const nowLastSlide = () => {
    return currentSlideIndex === slidesLength - 1;
  };

  const cleanSlides = () => {
    slides.forEach((slide) => {
      slide.classList.remove(activeSlideClass);
    });
  };

  // pagination
  const cleanPaginationButtons = () => {
    paginationButtons.forEach((button) => {
      button.classList.remove(activePaginationButtonClass);
    });
  };

  const setActivePaginationButton = (index) => {
    cleanPaginationButtons();

    currentSlideIndex = index;
    paginationButtons[index].classList.add(activePaginationButtonClass);
  };

  // slide
  const setActiveSlide = (index) => {
    cleanSlides();
    slides[index].classList.add(activeSlideClass);
  };

  // common
  const update = (index) => {
    setRootClass(index);
    setActiveSlide(index);
    setActivePaginationButton(index);
  };

  // Listeners
  nextButton.addEventListener('click', () => {
    if (nowLastSlide()) {
      update(0);

      return;
    }

    update(++currentSlideIndex);
  });

  prevButton.addEventListener('click', () => {
    if (nowFirstSlide()) {
      update(slidesLength - 1);

      return;
    }

    update(--currentSlideIndex);
  });

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      update(index)
    });
  });

  // start
  update(currentSlideIndex);
}
