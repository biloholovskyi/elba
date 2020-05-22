import 'normalize.css';
import {startFullPage, fullPageSwitch} from "./fullPage";
import {shapeText} from "./shapeAnimations";
import {evSize} from './eventVideo';
import './factory-slider';
import './accordion';
import './modal-catalog';
import './search';
import './catalog-aside';

$(document).ready(() => {
  startFullPage();
  // shapeText();
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
});


$(window).resize(() => {
  evSize();
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