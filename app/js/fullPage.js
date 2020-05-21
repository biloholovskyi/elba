import {shapeText} from "./shapeAnimations";

const startFullPage = () => {
  // получить список всех экранов
  const fullPages = document.querySelectorAll('.fullPage');

  // сделать первый экран видимым
  fullPages[0].classList.add('fullPage--active');

  // новый скрипт
  let mrgTop = 0;
  let mrgTopBody = 0;
  fullPages.forEach((page, index) => {
    const pageHeight = page.getBoundingClientRect().height.toString()
    mrgTopBody += +pageHeight;
    if(index > 0) {
      mrgTop += +pageHeight;
    }
    page.setAttribute('data-height', mrgTop);

    document.querySelector('body').style.height = mrgTopBody + 'px';
    // document.querySelector('.fullPage__box').setAttribute('data-page', '0');
    // дать отступ всем блокам
  });

  // конец нового скрипта
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

const scriptScroll = () => {
  const fullPages = document.querySelectorAll('.fullPage');
  const page =  document.querySelector('.fullPage--active');
  let next = page.nextElementSibling;


  const switchHeight = +next.getAttribute('data-height') - 10;
  const prevHeight = +page.getAttribute('data-height');
  if(pageYOffset < prevHeight) {
    next = page.previousElementSibling;
    if(next === null) {
      next = page.parentElement.previousElementSibling;
      page.parentElement.classList.remove('fullPage-wrapper--active');
    }

    page.classList.add('fullPage--close');
    setTimeout(() => {
      next.classList.add('fullPage--active');
      page.classList.remove('fullPage--active');
      if(next.classList.contains('shape')) {
        next.classList.add('shape--animation');
        shapeText();
      }
    }, 700)
    setTimeout(() => {
      page.classList.remove('fullPage--close');
    }, 1000)
  }

  if(next.classList.contains('fullPage-wrapper')) {
    console.log(next);
    next.classList.add('fullPage-wrapper--active');
    next = next.children[0];
  }

  if(pageYOffset > switchHeight) {
    page.classList.add('fullPage--close');
    setTimeout(() => {
      next.classList.add('fullPage--active');
      page.classList.remove('fullPage--active');
      if(next.classList.contains('shape')) {
        next.classList.add('shape--animation');
        shapeText();
      }
    }, 700)
    setTimeout(() => {
      page.classList.remove('fullPage--close');
    }, 1000)
  }
}

export {startFullPage, fullPageSwitch, scriptScroll}