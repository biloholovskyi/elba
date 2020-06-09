$(document).ready(function(){
    // MODAL SIGN IN
    $('.sign_in').on('click', function(){
      $('.sign_in-wrap').toggleClass('active');
    });
    // BASKET MODAL
    $('.basket').on('click', function(){ 
      $('.basket-wrap').toggleClass('active');    
    });
    // MODAL DLT ADDRESS
    $('.dlt-click').on('click', function(){
      $('.dlt-Adress-overlay').fadeIn('slow').css('display', 'flex');
    });
    $('.dlt-close').on('click', function(){
      $('.dlt-Adress-overlay').fadeOut('slow').css('display', 'none');
    });

  // modal pahe Your bag
  $('.promocode').on('click', function(){
    $(this).css('display', 'none');
    $('.enter-promocod').fadeIn('slow').css('display', 'block');
  });
  $('.promocode-closes').on('click', function(){
   
    $('.promocode').css('display', 'block');
    $('.enter-promocod').fadeOut('slow').css('display', 'none');
  });
  // FORGOT
 $('.forgot').on('click', function(){
  $('.pass-overlay').fadeIn('slow').css('display', 'flex');
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

$(document).mouseup(function(e) {
  let container = $(".active");
  if (!container.is(e.target) &&
    container.has(e.target).length === 0 &&
    !$(e.target).hasClass("active")) {
    container.removeClass("active");
  }
});

