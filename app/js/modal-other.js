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
    $('.pass-close').on('click', function(){
      $('.dlt-Adress-overlay').fadeOut('slow').css('display', 'none');
    });
});

$(document).on('click', (e) => {
  // close modal
  const button = $('.dlt-click');
  const overlay = $('.pass-modal');
  if (!button.is(e.target) && button.has(e.target).length === 0) {
    if (!overlay.is(e.target) && overlay.has(e.target).length === 0) {
      $('.dlt-Adress-overlay').fadeOut('slow').css('display', 'none'); 
    }
  }

 
  
});

$(document).mouseup(function(e) {
  var container = $(".active");
  if (!container.is(e.target) &&
    container.has(e.target).length === 0 &&
    !$(e.target).hasClass("btn")) {
    container.removeClass("active");
  }
});