import 'normalize.css';
import 'jquery-touchswipe';
import { evSize } from './eventVideo';
import { toggleMenu, innerMobileMenu, closeInnerMobileMenu } from "./mobileMenu";
import './factory-slider';
import {
  confHidden,
  selectMaterial,
  newElement,
  newMainElement,
  switchTabs,
  toggleModal,
  closeMobileMain,
  closeMobileType,
  closeMobileModal
} from "./configuratorSidebar";
import './accordion';
import './modal-catalog';
import './search';
import './catalog-aside';
import { scrollAnim, bodyHeight } from "./scrollScript";
import { switchSlideFirst, autoSwitchFirst } from "./firstSlider";
import { inspSlider } from "./inspiration";
import './sticky';
import './modal-other';
import './select';
import { hoverSlider } from "./listInnerSlider";
import { collectionHeight } from "./collectionHeight";


$(document).ready((e) => {
  bodyHeight();
  evSize();
  scrollAnim();
  autoSwitchFirst(e);

  if($('.home-first').length > 0) {
    let ts;
    $(document).bind('touchstart', function(e) {
      if($('.home-first').attr('data-swipe')) {
        return
      }
      ts = e.originalEvent.touches[0].clientX;
      $('.home-first').attr('data-swipe', 'start')
    });

    $(document).bind('touchend', function() {
      $('.home-first').removeAttr('data-swipe');
    });

    $(document).bind('touchmove', function(e) {
      let te = e.originalEvent.changedTouches[0].clientX;
      const dist = ts - te;
      if (dist > 0) {
        switchSlideFirst(e, false, 'next');
      } else if(dist < 0) {
        switchSlideFirst(e, false, 'prev');
      }
    });
  }


  $('#catalog-page .filter-btn').on('click', function () {
    $('body').css({
      'overflow': 'hidden'
    });
    $('#filter-page').css('display', 'block');
  });

  $('.filter-back').on('click', function () {
    $('body').css({
      'overflow': 'visible'
    });
    $('#filter-page').css('display', 'none');
    $('#detail-page').css('display', 'none');
  })

  console.log($('.list__item'));

  if($(window).width() < 801) {
    $('.list__item').on('click', function () {
      $('body').css({
        'overflow': 'hidden'
      });
      $('#detail-page').css('display', 'block');
    });
  }

  if($('.list__follow-us').length > 0) {
    const safe = $('.wrapp--safe');
    safe.css('min-height', $('.home-first__slid').eq(0).height() + 'px');


    const left = ($(window).width() - $('.m-container').eq(0).width()) / 2;

    $('.list__follow-us').css({
      'width': 'max-content',
      'left': left + 'px'
    });
  }

  if($('.collect-slider__item').length > 0) {
    setTimeout(() => {
      collectionHeight();
    }, 2000)
  }

  // collections slider
  $('.collections__slider').owlCarousel({
    margin: 16,
    autoWidth: true,
    loop: false,
    nav: true,
    navText: '',
    responsive : {
      0 : {
        autoWidth: false,
        items: 1
      },
      650: {
        autoWidth: true
      }
    }
  });

  // conf mobile slider
  $('.conf-mobile-slider').owlCarousel({
    loop: false,
    margin: 12,
    autoWidth: true,
    nav: false,
    dots: false,
  });

  // list mobile slider
  $('.list__slider__mobile').owlCarousel({
    loop: false,
    margin: 14,
    autoWidth: true,
    nav: false,
    dots: false,
  });

  // blog slider
  $('.blog__slider').owlCarousel({
    margin: 12,
    loop: false,
    nav: false,
    items: 1
  });

  document.addEventListener('scroll', () => {scrollAnim()})

  $('.header__mobile .menu').on('click', toggleMenu);
  $('.option--visible').on('click', (e) => {confHidden(e)})
  $('.order-new-element--material .new-material').on('click', (e) => {selectMaterial(e)})
  $('.order-buttons .item--add, .order-buttons .item--cancel').on('click', (e) => {newElement(e)});
  $('.order-new-element--main .new-item').on('click', (e) => {newMainElement(e)});
  $('.order-tabs .item').on('click', (e) => {switchTabs(e)});
  $('.configurator__main .conf__main-top .links .link, .conf-modal__close, .conf-mobile__text-info .mobile-conf-links .link').on('click', (e) => toggleModal(e));
  $('.home-first__nav .nav__item, .home-first__dots .dot').on('click', (e) => {switchSlideFirst(e)})
  $('.configurator__sidebar .conf__slider-nav .conf-slider__btn').on('click', (e) => {inspSlider(e)})
  $('.order-head-cancel').on('click', closeMobileMain);
  $('.order-head-type').on('click', closeMobileType);
  $('.order-head-modal').on('click', closeMobileModal);
  $('.list__inner-slider .list-inner__nav .item').on('mouseover', (e) => hoverSlider(e));
  $('.modal-menu__nav .item--inner').on('click', innerMobileMenu);
  $('.modal-menu__back').on('click', closeInnerMobileMenu);

  $('.promocod-closes').on('click', function () {
    $('.enter-promocod').fadeOut('fast');
    $('.promocode').fadeIn('fast');
  })

  $(document).on('click', (e) => {

    // close modal configurator
    const btn = $('.configurator__main .conf__main-top .links .link, .conf-modal__close, .conf-mobile__text-info .mobile-conf-links .link');
    const modal = $('.conf-modal__body');
    if ( !btn.is(e.target) && !modal.is(e.target) && modal.has(e.target).length === 0) {
      if($('.conf-modal').hasClass('conf-modal--show')) {
        toggleModal(e);
      }
    }
  });

  if($(window).width() < 1061 && $('.home-first').length > 0) {
    $(function(e) {
      //Enable swiping...
      // $("body").swipe( {
      //   //Generic swipe handler for all directions
      //   swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      //     const status = direction === 'left' ? 'next' : 'prev';
      //     // switchSlideFirst(e, false, status);
      //   },
      //   //Default is 75px, set to 0 for demo so any distance triggers swipe
      //   threshold:0
      // });
    });
  }

  setTimeout(() => {
    Array.from(document.querySelectorAll('.poster-hover-effect')).forEach((el) => {
      const img1 = $(el).attr('data-src-1');
      const img2 = $(el).attr('data-src-2');
      new hoverEffect({
        parent: el,
        intensity: el.dataset.intensity || undefined,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        image1: img1,
        image2: img2,
        displacementImage: '../media/displacement/14.jpg'
      });
    });
  }, 1300)

  setTimeout(() => {
    let minHeight = 0;
    Array.from(document.querySelectorAll('.poster-hover-effect')).forEach((el) => {
      const height = $(el).children('.poster-hover-img-1').height();
      const width = $(el).children('.poster-hover-img-1').width();
      if (minHeight === 0) {
        minHeight = height;
      } else if (minHeight > height) {
        minHeight = height;
      }
      $(el).children('canvas').css('height', height + 'px');
      $(el).children('canvas').css('width', width + 'px');
    });
    $('.collect-slider__item .poster').css('max-height', minHeight + 'px');
  }, 2000)
});


//  VALID FORM
var form = document.querySelector('.mainForm');
var validateBtn = form.querySelector('.validateBtn');
var inp = form.querySelector('.input-pass');
var fields = form.querySelectorAll('.field');



form.addEventListener('submit', function (event) {
  event.preventDefault();

  var errors = form.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('Error name', fields[i]);
      var error = document.createElement('div');
      error.className='error',
      error.style.color = 'red',
      error.innerHTML = 'Error name',
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
});
// end validate

$(window).resize(() => {
  if($('.list__follow-us').length > 0) {
    const safe = $('.wrapp--safe');
    safe.css('min-height', $('.home-first__slid').eq(0).height() + 'px');


    const left = ($(window).width() - $('.m-container').eq(0).width()) / 2;

    $('.list__follow-us').css({
      'width': 'max-content',
      'left': left + 'px'
    });
  }
  evSize();
  if($('.collect-slider__item').length > 0) {
    collectionHeight();
  }
  scrollAnim();

  setTimeout(() => {
    let minHeight = 0;
    Array.from(document.querySelectorAll('.poster-hover-effect')).forEach((el) => {
      const height = $(el).children('.poster-hover-img-1').height();
      if (minHeight === 0) {
        minHeight = height;
      } else if (minHeight > height) {
        minHeight = height;
      }
      const width = $(el).children('.poster-hover-img-1').width();
      $(el).children('canvas').css('width', width + 'px');
      $(el).children('canvas').css('height', height + 'px');
    });
    $('.collect-slider__item .poster').css('max-height', minHeight + 'px');
  }, 400)
});

let btnContainer = document.getElementsByClassName('.catalog-btn');
let btns = document.getElementsByClassName('.acc-btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




