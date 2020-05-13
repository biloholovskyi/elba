import 'normalize.css';
import {startFullPage} from "./fullPage";
import {shapeText} from "./shapeAnimations";
import {heightPoster} from "./collections";

$(document).ready(() => {
  startFullPage();
  shapeText();

  // collections slider
  heightPoster();

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