import 'normalize.css';
import { evSize } from './eventVideo';
import { toggleMenu } from "./mobileMenu";
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


$(document).ready((e) => {
  bodyHeight();
  evSize();
  scrollAnim();
  autoSwitchFirst(e);

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


  // list inner slider
  $('.list__inner-slider').owlCarousel({
    loop: false,
    margin: 0,
    item: 1,
    autoWidth: true,
    nav: false,
    dots: true,
  });

  // conf mobile slider
  $('.conf-mobile-slider').owlCarousel({
    loop: false,
    margin: 12,
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
  evSize();
  // startFullPage();
  scrollAnim();
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


