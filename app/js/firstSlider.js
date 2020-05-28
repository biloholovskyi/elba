const switchSlideFirst = (e, auto = false) => {
  let status;
  const eventCurrent = !auto ? $(e.currentTarget) : false;
  if(eventCurrent && eventCurrent.hasClass('next') && !auto) {
    status = 'next';
  } else {
    status = 'prev';
  }

  if(auto) {
    status = 'next';
  }

  if(eventCurrent && eventCurrent.hasClass('dot')) {
    status = 'dot';
  }

  const currentTitle = $('.home-first__title--active');
  const currentDesc = $('.home-first__desc--active');
  const titles = $('.home-first__title');
  const desc = $('.home-first__desc');
  let nextTitle = null;
  let nextDesc = null;

  if(status === 'next') {
    nextTitle = currentTitle.next('.home-first__title').length > 0 ? currentTitle.next('.home-first__title') : titles.eq(0);
    nextDesc = currentDesc.next('.home-first__desc').length > 0 ? currentDesc.next('.home-first__desc') : desc.eq(0);
  } else {
    nextTitle = currentTitle.prev('.home-first__title').length > 0 ? currentTitle.prev('.home-first__title') : titles.last();
    nextDesc = currentDesc.prev('.home-first__desc').length > 0 ? currentDesc.prev('.home-first__desc') : desc.last();
  }

  if(status === 'dot') {
    const index = eventCurrent.index();
    nextTitle = titles.eq(index);
    nextDesc = desc.eq(index);
  }

  const number = nextTitle.index() + 1;
  $('.home-first__video-line .first').html('0' + number);
  const dots = $('.home-first__dots .dot');
  dots.removeClass('dot--active');
  dots.eq(number - 1).addClass('dot--active');

  const safe = $('.wrapp--safe');
  safe.css('min-height', safe.height() + 'px');

  titles.fadeOut(100).removeClass('home-first__title--active');
  desc.fadeOut(100).removeClass('home-first__desc--active');
  setTimeout(() => {
    nextTitle.fadeIn('slow').addClass('home-first__title--active');
    nextDesc.fadeIn('slow').addClass('home-first__desc--active');
  }, 100)
}

const autoSwitchFirst = (e) => {
  setInterval((e) => {
    switchSlideFirst(e, true)
  }, 4000)
}

export  { switchSlideFirst, autoSwitchFirst }