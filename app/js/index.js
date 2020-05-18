import 'normalize.css';
import {startFullPage, fullPageSwitch} from "./fullPage";
import {evSize} from './eventVideo';
import {toggleMenu} from "./mobileMenu";

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

  // full page switch
  document.querySelectorAll('.fullPage').forEach((elem) => {
    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", fullPageSwitch);
      } else if ('onmousewheel' in fullPageSwitch) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", fullPageSwitch);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", fullPageSwitch);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", fullPageSwitch);
    }
  });
  // full page switch end

  $('.header__mobile .menu').on('click', toggleMenu);
});


$(window).resize(() => {
  evSize();
});