let firstInterval = null;

const switchSlideFirst = (e, auto = false, swipe = false) => {
  const stop = $('.home-first').attr('stop');
  if(stop) {
    return
  } else {
    clearInterval(firstInterval);
    $('.home-first').attr('stop', 'stop');
    $('.home-first__video-line .line__progress').removeClass('line__progress--anim');
    setTimeout(() => {
      $('.home-first').removeAttr('stop');
      firstInterval = setInterval((e) => {
        switchSlideFirst(e, true)
      }, 4000);
      $('.home-first__video-line .line__progress').addClass('line__progress--anim');
    }, 1000)
  }
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

  if(swipe) {
    status = swipe;
  }

  const current = $('.home-first__slid--active');
  const all = $('.home-first__slid');
  let next = null;

  if(status === 'next') {
    next = current.next('.home-first__slid').length > 0 ? current.next('.home-first__slid') : all.eq(0);
  } else {
    next = current.prev('.home-first__slid').length > 0 ? current.prev('.home-first__slid') : all.last();
  }

  if(status === 'dot') {
    const index = eventCurrent.index();
    next = all.eq(index);
  }

  const number = next.index() + 1;
  $('.home-first__video-line .first').html('0' + number);
  const dots = $('.home-first__dots .dot');
  dots.removeClass('dot--active');
  dots.eq(number - 1).addClass('dot--active');

  const safe = $('.wrapp--safe');
  safe.css('min-height', all.eq(0).height() + 'px');

  all.fadeOut(100).removeClass('home-first__slid--active');
  setTimeout(() => {
    next.fadeIn('slow').addClass('home-first__slid--active');
  }, 100)
}

const autoSwitchFirst = (e) => {
  $('.home-first__video-line .line__progress').addClass('line__progress--anim');
  firstInterval = setInterval((e) => {
    switchSlideFirst(e, true)
  }, 4000)
}

export  { switchSlideFirst, autoSwitchFirst }