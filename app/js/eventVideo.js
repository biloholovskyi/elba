const evSize = () => {
  const evBlock = $('.event__video-block');

  if(evBlock.length > 0) {
    evBlock.css('height', evBlock.width() + 'px');
  }
}

export {evSize}