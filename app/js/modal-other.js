$(document).ready(function(e){
    // MODAL SIGN IN
    $('.sign_in').on('click', function(e){
      // $(this).hide();
      $('.sign_in-wrap').toggleClass('active');
      fix(e);
    });
    // BASKET MODAL
    $('.basket').on('click', function(e){
      $('.basket-wrap').toggleClass('active');
      fix(e);
    });
    // MODAL DLT ADDRESS
    $('.dlt-click').on('click', function(e){
      $('.dlt-Adress-overlay').fadeIn('slow').css('display', 'flex');

    });
    $('.dlt-close').on('click', function(e){
      $('.dlt-Adress-overlay').fadeOut('slow').css('display', 'none');
    });

  // modal pahe Your bag
  $('.promocode').on('click', function(e){
    $(this).css('display', 'none');
    $('.enter-promocod').fadeIn('slow').css('display', 'block');
  });
  $('.promocode-closes').on('click', function(){
   
    $('.promocode').css('display', 'block');
    $('.enter-promocod').fadeOut('slow').css('display', 'none');
  });
  // FORGOT
 $('.forgot').on('click', function(){
  $('.pass-overlay').fadeIn().css('display', 'flex');
 });

 $('.pass-close').on('click', function(){
  $('.pass-overlay').fadeOut('slow').css('display', 'none');
 });

 
});

$(document).on('click', (e) => {
  // close modal
  const button = $('.dlt-click');
  const overlay = $('.dlt-modal');
  if (!button.is(e.target) && button.has(e.target).length === 0) {
    if (!overlay.is(e.target) && overlay.has(e.target).length === 0) {
      $('.dlt-Adress-overlay').fadeOut('slow').css('display', 'none'); 
    }
  }

  const button2 = $('.forgot');
  const overlay2 = $('.pass-modal');
  if (!button2.is(e.target) && button2.has(e.target).length === 0) {
    if (!overlay2.is(e.target) && overlay2.has(e.target).length === 0) {
      $('.pass-overlay').fadeOut('slow').css('display', 'none'); 
    }
  }

  

 
  
});



$(document).mouseup(function (e){
  var div = $(".sign_in, .sign_in-wrap");
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
    div.removeClass('active');
  }

  var div = $(".basket, .basket-wrap");
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
    div.removeClass('active');
  }
});


const fix = (e) => {
  if($(e.currentTarget).hasClass('fix-close-img')) {
    $(e.currentTarget).removeClass('fix-close-img');
    $('body').css('overflow', 'visible');
  } else {
    $(e.currentTarget).addClass('fix-close-img');
    $('body').css('overflow', 'hidden');
  }
}