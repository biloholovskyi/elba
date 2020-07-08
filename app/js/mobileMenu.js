const toggleMenu = () => {
  $('.modal-menu').toggleClass('modal-menu--active');
  $('.header__mobile .menu').toggleClass('menu--show');
  $('body').toggleClass('stop-scroll');
}

const innerMobileMenu = () => {
  $('.modal-menu--inner').css('z-index', 70);
}

const closeInnerMobileMenu = () => {
  $('.modal-menu--inner').css('z-index', -1);
}

export {toggleMenu, innerMobileMenu, closeInnerMobileMenu}