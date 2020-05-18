const toggleMenu = () => {
  $('.modal-menu').toggleClass('modal-menu--active');
  $('.header__mobile .menu').toggleClass('menu--show');
  $('body').toggleClass('stop-scroll');
}

export {toggleMenu}