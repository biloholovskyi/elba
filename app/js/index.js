import 'normalize.css';
import {startFullPage, fullPageSwitch, scriptScroll} from "./fullPage";
import {evSize} from './eventVideo';
import {toggleMenu} from "./mobileMenu";
import './factory-slider';
import {confHidden, selectMaterial, newElement, newMainElement, switchTabs, toggleModal} from "./configuratorSidebar";

$(document).ready(() => {
  startFullPage();
  evSize();

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
  

  // blog slider
  $('.blog__slider').owlCarousel({
    margin: 12,
    loop: false,
    nav: false,
    items: 1
  });

  document.addEventListener('scroll', () => {scriptScroll()})

  $('.header__mobile .menu').on('click', toggleMenu);
  $('.option--visible').on('click', (e) => {confHidden(e)})
  $('.order-new-element--material .new-material').on('click', (e) => {selectMaterial(e)})
  $('.order-buttons .item--add, .order-buttons .item--cancel').on('click', (e) => {newElement(e)});
  $('.order-new-element--main .new-item').on('click', (e) => {newMainElement(e)});
  $('.order-tabs .item').on('click', (e) => {switchTabs(e)});
  $('.configurator__main .conf__main-top .links .link, .conf-modal__close').on('click', (e) => toggleModal(e));

  $(document).on('click', (e) => {
    // close modal configurator
    const btn = $('.configurator__main .conf__main-top .links .link, .conf-modal__close');
    const modal = $('.conf-modal__body');
    if ( !btn.is(e.target) && !modal.is(e.target) && modal.has(e.target).length === 0) {
      if($('.conf-modal').hasClass('conf-modal--show')) {
        toggleModal(e);
      }
    }
  });
});


$(window).resize(() => {
  evSize();
});