const heightPoster = () => {
  const block = $('.collections__slider-box--active');

  if(block.length > 0) {
    const colorH = $('.collect-slider__item .color-list').height();
    console.log(colorH)
    const posterHeight = block.height() - 80 - $('.collect__nav-box').height();
  }
}

export {heightPoster}