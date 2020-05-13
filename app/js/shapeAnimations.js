const shapeText = () => {
  // проверить та ли страница
  const block = $('.shape__text--active');
  const paragraph = $('.shape__text p');
  const padding = $('.shape__padding');

  paragraphOpacity(paragraph);

  if(block.length > 0) {
    // задать размеры и стили блоку с текстом
    const paddingHeight = $(window).height();
    const smallPadding = $(window).height() / 2 - 60;
    block.css({
      'max-height': $(window).height() + 'px',
    });

    padding.css('height', paddingHeight + 'px');

    // анимированно показать и расчитывать прозрачность текста
    setTimeout(() => {
      block.css('overflow', 'auto');
      padding.css({
        'transition': 'all .9s',
        'height': smallPadding + 'px'
      });
    }, 3800)
  }
}

const paragraphOpacity = (paragraphs) => {
  let opacity = 1;
  paragraphs.each(function () {
    $(this).css('opacity', opacity);
    opacity = opacity > 0 ? opacity - 0.3 : 0;
  });
}

export {shapeText}