$(document).ready(function(){
    $('.search-btn').on('click', function() {
        let val = $('.search-inp').val();//Получаем данные из input
        $('.inner-inp').html(val);//Вставляем значение в тег с классом
        $('.visability-title').css('display', 'none');
        $('.hidden-title').fadeIn('slow').css('display', 'block');
    });

    $(".reset").bind("click", function() {
        $("input[type=text]").val("");
        $('.visability-title').css('display', 'block');
        $('.hidden-title').fadeOut('slow').css('display', 'none');
      });
});