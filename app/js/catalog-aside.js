$(document).ready(function(){
    $('.acc-btn').on('click', function(){
        $(this).toggleClass('active');
    });
    $('.color-btn').on('click', function(){
        $(this).toggleClass('active');
    });

    // PAYMENT PAGE
    $('.method_type button').on('click', function(){
        $(this).toggleClass('active');
    });

});