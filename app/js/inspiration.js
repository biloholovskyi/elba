const inspSlider = (e) => {
  const slider = $('.conf__slider ');
  const items = $('.conf-slider__item');
  let index = +slider.attr('data-slid');
  const prev = $('.configurator__sidebar .conf__slider-nav .prev');
  const next = $('.configurator__sidebar .conf__slider-nav .next');

  if($(e.currentTarget).hasClass('next') && !$(e.currentTarget).hasClass('disabled')) {
    index = index + 1;
    prev.removeClass('disabled');
  } else if (!$(e.currentTarget).hasClass('disabled')) {
    index = index - 1;
    next.removeClass('disabled');
  }

  if(index === 0) {
    prev.addClass('disabled');
  }

  slider.attr('data-slid', index);
  const trs = index + '00%)';

  items.css({
    'transform': 'translateX(-' + trs
  });

  if(+slider.attr('data-slid') === items.length - 1 || index > items.length) {
    next.addClass('disabled');
  }
}

export {inspSlider}