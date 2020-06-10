const hoverSlider = (e) => {
  const current = $(e.currentTarget);
  current.parent().children('.item').removeClass('active')
  current.parent().children('.item').eq(current.index()).addClass('active');
  current.parent().parent().children('.inner__item').removeClass('active')
  current.parent().parent().children('.inner__item').eq(current.index()).addClass('active');
}

export {hoverSlider}