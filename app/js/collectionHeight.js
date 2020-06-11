const collectionHeight = () => {
  const img = $('.collections__slider .collect-slider__item .poster');
  const header = $('.header').height();
  const pb = $('.collections__content').css('padding-bottom').split('px')[0];
  const title = $('.collect__nav-box').height();
  const posterM = img.css('margin-bottom').split('px')[0];
  const color = $('.collections__slider .collect-slider__item .color-list').height();
  const colorM = $('.collections__slider .collect-slider__item .color-list').css('margin-bottom').split('px')[0];
  const title2 = $('.collections__slider .collect-slider__item .title').height();
  const title2M = $('.collections__slider .collect-slider__item .title').css('margin-bottom').split('px')[0];
  const desc = $('.collections__slider .collect-slider__item .desc').height();
  const descM = $('.collections__slider .collect-slider__item .desc').css('margin-bottom').split('px')[0];
  const link = $('.collect-slider__item .arrow-link').height();
  let h = $(window).height() - header - +pb - title - +posterM - color - +colorM - title2 - +title2M - desc - +descM - link - 24;
  img.css('height', h + 'px');
  // $('.collect-slider__item canvas').css('height', h + 'px');
  img.css('max-height', h + 'px');
}

export {collectionHeight}