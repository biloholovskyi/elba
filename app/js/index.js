import 'normalize.css';
import {startFullPage} from "./fullPage";
import {shapeText} from "./shapeAnimations";

$(document).ready(() => {
  startFullPage();
  shapeText();

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
});