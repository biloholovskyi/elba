const confHidden = (e) => {
  $(e.currentTarget).toggleClass('option--hidden');
}

const selectMaterial = (e) => {
  $('.order-new-element--material .new-material').removeClass('new-material--active');
  $(e.currentTarget).addClass('new-material--active')
}

const newElement = (e) => {
  const main = $('.order-new-element--main');
  const title = $('#order-title');
  main.toggleClass('order-new-element--show');
  if(main.hasClass('order-new-element--show')) {
    title.html('New element');
  } else {
    title.html('Your order');
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
  const modal = $('.conf-modal');
  const header = $('.header');
  modal.toggleClass('conf-modal--show');
  if(modal.hasClass('conf-modal--show')) {
    header.css('z-index', '1');
  } else {
    header.css('z-index', '60');
  }
}

export {
  confHidden,
  selectMaterial,
  newElement,
  newMainElement,
  switchTabs,
  toggleModal
}