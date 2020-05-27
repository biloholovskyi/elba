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
        margin: 10,
        loop: true,
        nav: false,
        items: 1
      });
});