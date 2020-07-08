// OUR FACTORY PAGE slider
$(document).ready(function(){
    $('#factory-owl').owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        items: 1
      });

      $('#blog-owl').owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        items: 1
      });

      $('#single-owl').owlCarousel({
        margin: 11,
        loop: false,
        nav: false,
        items: 1
      });

      $('#single-news-owl').owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: false,
        items: 3,
          responsive:{
            0:{
              items: 1
            },
            991:{
              items: 3
            }
        }
      });
});