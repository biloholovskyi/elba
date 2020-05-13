import 'normalize.css';
import {startFullPage} from "./fullPage";
import {shapeText} from "./shapeAnimations";

$(document).ready(() => {
  startFullPage();
  shapeText();
});


$(window).resize(() => {

});