{
  const main = () => {
    const root = document.querySelector('#catalog-form__price-container');
    const slider = root.querySelector('.catalog-form__price-slider');
    const minInput = root.querySelector('.catalog-form__price-input[name="min-price"]');
    const maxInput = root.querySelector('.catalog-form__price-input[name="max-price"]');

    noUiSlider.create(slider, {
      range: {
        min: 1,
        max: 5000,
      },
      start: [100, 2000],
      margin: 1,
      connect: true,
      format: {
        to: (value) => {
          return parseInt(value)
        },
        from: (value) => {
          return value;
        },
      },
    });

    slider.noUiSlider.on('update', (values, handle) => {
      if (handle === 0) {
        minInput.value = values[0];
      } else {
        maxInput.value = values[1];
      }
    });

    minInput.addEventListener('change', () => {
      slider.noUiSlider.set([minInput.value, maxInput.value]);
    });

    maxInput.addEventListener('change', () => {
      slider.noUiSlider.set([minInput.value, maxInput.value]);
    });
  };

  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.js';
  document.body.appendChild(script);

  script.addEventListener('load', main);
}
