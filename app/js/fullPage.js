import {shapeText} from "./shapeAnimations";

const startFullPage = () => {
  // получить список всех экранов
  const fullPages = document.querySelectorAll('.fullPage');

  // сделать первый экран видимым
  fullPages[0].classList.add('fullPage--active');
}

const fullPageSwitch = (e) => {
  if($(window).width() < 1061) {
    return
  }
  e = e || window.event;

  // for data storage
  const data = $('#fullPageData');

  if(!data.attr('data-process')) {
    // size scrolling
    const delta = e.deltaY || e.detail || e.wheelDelta;
    // current active section
    const active = $('.fullPage--active');
    // all sections
    const all = $('.fullPage');

    // saving scroll size
    const dataDelta = data.attr('data-delta') ? +data.attr('data-delta') : 0;
    data.attr('data-delta', delta + +dataDelta);

    let nextSection;

    // next section
    if(dataDelta > 1000) {
      if(active.next().hasClass('fullPage-wrapper')) {
        nextSection = $('.fullPage-wrapper .fullPage').eq(0);
      } else {
        nextSection = active.next('.fullPage').length > 0 ? active.next('.fullPage') : all.eq(0);
      }

    } else if(dataDelta < -1000) {
      if(active.parent().hasClass('fullPage-wrapper')) {
        nextSection = active.prev('.fullPage').length > 0 ? active.prev('.fullPage') : active.parent().prev('.fullPage');
      } else {
        nextSection = active.prev('.fullPage').length > 0 ? active.prev('.fullPage') : all.last();
      }
    }

    // switch section
    if(dataDelta > 1000 || dataDelta < -1000) {
      data.attr('data-process', 'process');
      active.removeClass('fullPage--active');
      setTimeout(() => {
        nextSection.addClass('fullPage--active');
        // change header theme
        // start section animation
        if(nextSection.hasClass('home-first')) {
          $('header').addClass('header--white');
        } else {
          $('header').removeClass('header--white');
        }

        if(nextSection.hasClass('shape')) {
          $('.shape').addClass('shape--animation');
          shapeText();
        }
      }, 1000);

      // clear process
      setTimeout(() => {
        data.removeAttr('data-delta').removeAttr('data-process');
      }, 2000)
    }
  }
}

export {startFullPage, fullPageSwitch}