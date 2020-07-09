const confHidden = (e) => {
  $(e.currentTarget).toggleClass('option--hidden');
}

const selectMaterial = (e) => {
  $('.order-new-element--material .new-material').removeClass('new-material--active');
  $(e.currentTarget).addClass('new-material--active')
}

const newElement = (e) => {
  const main = $('.order-new-element--main');
  const title = $('#order-title .title');
  main.toggleClass('order-new-element--show');
  if(main.hasClass('order-new-element--show')) {
    title.html('New element');
    if($(window).width() < 1061) {
      $('.configurator__sidebar .order-buttons').css({
        'width': '100%',
        'position': 'absolute',
        'margin-left': '0',
        'margin-right': '0'
      });
    }
  } else {
    title.html('Your order');
    if($(window).width() < 1061) {
      $('.configurator__sidebar .order-buttons').css({
        'width': 'auto',
        'position': 'relative',
        'margin-left': '-24px',
        'margin-right': '-24px'
      });
    }
  }
}

const newMainElement = (e) => {
  $('.order-new-element').removeClass('order-new-element--show');
  switch ($(e.currentTarget).attr('data-type')) {
    case 'body':
      $('.order-new-element--body').addClass('order-new-element--show');
      break
    case 'shape':
      $('.order-new-element--tabs').addClass('order-new-element--show');
      break
    case 'straps':
      $('.order-new-element--straps').addClass('order-new-element--show');
      break
  }
}

const switchTabs = (e) => {
  const lists = $('.order-new-element--tabs .order-list');
  lists.removeClass('order-list--show');
  $('.order-tabs .item').removeClass('item--active');
  $(e.currentTarget).addClass('item--active');
  lists.eq($(e.currentTarget).index()).addClass('order-list--show');
}

const toggleModal = (e) => {
  e.preventDefault();
  const link = $(e.currentTarget).attr('href');
  console.log(link);
  const modal = link ? $('.conf-modal--' + link) : $('.conf-modal');
  const header = $('.header');
  if(modal.hasClass('conf-modal--show')) {
    modal.removeClass('conf-modal--show');
    header.css('z-index', '60');
    $('body').css('overflow', 'visible');
  } else {
    modal.addClass('conf-modal--show');
    header.css('z-index', '1')
    $('body').css({
      'overflow': 'hidden'
    });
  }
}

const closeMobileMain = () => {
  $('.order-new-element').removeClass('order-new-element--show');
}

const closeMobileType = () => {
  $('.order-new-element').removeClass('order-new-element--show');
  $('.order-new-element--main').addClass('order-new-element--show');
}

const closeMobileModal = () => {
  $('.conf-modal').removeClass('conf-modal--show');
  $('.header').css('z-index', '60');
  $('body').css('overflow', 'visible');
}

export {
  confHidden,
  selectMaterial,
  newElement,
  newMainElement,
  switchTabs,
  toggleModal,
  closeMobileMain,
  closeMobileType,
  closeMobileModal
}