$(document).ready(function () {

  $('.price__quick').on('click', function () {
    $('.catalog-overlay').show().css('display', 'flex');
    $('body').css({'overflow': 'hidden'});
  });

  $('.img-block .small-img').on('click', function () {

    const img = $(this).attr('src');

    $('.img-main ').css('background-image', 'url(' + img + ')');

  });


  $('.catalog-close').on('click', function () {
    $('.catalog-overlay').hide();
    $('body').css({'overflow': 'visible'});
  });

});

$(document).on('click', function (e) {
  let modal = $('.catalog-modal, .sign_in-wrap, .basket-empty, .basket-wrap, .log_out');
  let btn = $('.price__quick, .sign_in, .basket, .filter-btn');

  if (!btn.is(e.target) && btn.has(e.target).length === 0) {
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      $('.catalog-overlay').hide();
      $('body').css({'overflow': 'visible'});
    }
  }
});

$(document).on('click', function (e) {
  let modal = $('.catalog-modal, .sign_in-wrap, .basket-empty, .basket-wrap, .log_out');
  let btn = $('.sign_in, .basket, .filter-btn');

  if (!btn.is(e.target) && btn.has(e.target).length === 0) {
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      $('body').css({'overflow': 'visible'});
    }
  }
});
