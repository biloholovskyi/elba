import 'normalize.css';
import {startFullPage} from "./fullPage";
import {shapeText} from "./shapeAnimations";
import {evSize} from './eventVideo';

$(document).ready(() => {
  startFullPage();
  shapeText();
  evSize();

  // collections slider
  $('.collections__slider').owlCarousel({
    margin: 16,
    autoWidth: true,
    loop: false,
    nav: true,
    navText: ''
  });
});


$(window).resize(() => {
  evSize();
});