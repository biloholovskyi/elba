const scrollSwitch = () => {
  const pages = $('.fullPage');
  const dh = +pages.eq(0).attr('data-height');

  if($(window).width() > 1060) {
    $('.fullPage-wrapper').removeClass('fullPage-wrapper--active');
  } else {
    if(pageYOffset < dh * 7) {
      $('.fullPage-wrapper').removeClass('fullPage-wrapper--active');
    } else {
      $('.fullPage-wrapper').addClass('fullPage-wrapper--active');
    }
  }

  if(pageYOffset < dh) {
    $('header').addClass('header--white');
  } else {
    $('header').removeClass('header--white');
  }

  if(pageYOffset < dh) {
    hiddenAll(pages);

    pages.eq(0).css({
      'z-index': '51',
      'opacity': '1'
    })
  } else if(pageYOffset < dh * 2) {
    hiddenAll(pages);

    const homeTextTitle = $('.home-text__title')
    const homeTextDesc = $('.home-text__desc')

    pages.eq(1).css({
      'z-index': '51',
      'opacity': '1'
    });

    // calc percent
    const percent = (pageYOffset - dh) * 100 / dh;

    let homeTextOpacity = `0.${(percent * 3).toFixed(0)}`;
    if(+(percent * 3).toFixed(0) > 99) {
      homeTextOpacity = 1;
    }

    if(+(percent * 3).toFixed(0) < 10) {
      homeTextOpacity = 0.1;
    }


    let homeTextY = 100 - (percent * 2).toFixed(0);
    let homeTextYDesc = homeTextY * .7;
    if(+(percent * 2).toFixed(0) > 100) {
      homeTextY = 0;
    }

    if(homeTextYDesc < 0) {
      homeTextYDesc = 0;
    }

    if(percent > 50) {
      homeTextOpacity = `0.${(100 - percent).toFixed(0)}`;

      if((100 - percent).toFixed(0) < 10) {
        homeTextOpacity = 0.1
      }

      homeTextY = (50 - percent).toFixed(0);
      homeTextYDesc = homeTextY * .7;
    }

    homeTextTitle.css({
      'opacity': homeTextOpacity,
      'transform': 'translateY(' + homeTextY + 'px)'
    });
    homeTextDesc.css({
      'opacity': homeTextOpacity,
      'transform': 'translateY(' + homeTextYDesc + 'px)'
    })
  } else if(pageYOffset < dh * 3) {
    hiddenAll(pages);

    pages.eq(2).css({
      'z-index': '51',
      'opacity': '1'
    });
    const img1 = $('.image-text__img--1');
    const img2 = $('.image-text__img--2');
    const img3 = $('.image-text__img--3');

    const imgTitle = $('.image-text__title');
    const imgText = $('.image-text__desc');

    img1.css('opacity', '0');
    img2.css('opacity', '0');
    img3.css('opacity', '0');

    imgTitle.css({
      'transform': 'translateY(100px)'
    })

    imgText.css({
      'transform': 'translateY(100px)',
    })

    // calc percent
    const percent = (pageYOffset - dh * 2) * 100 / dh;
    let opacityImg = `0.${(percent * 2.5).toFixed(0)}`;
    if((percent * 2.5).toFixed(0) > 99) {
      opacityImg = 1
    }

    if(percent > 10) {
      img1.css('opacity', opacityImg);
      img2.css('opacity', opacityImg);
      img3.css('opacity', opacityImg);
    }

    let imgTextOpacity = `0.${(percent * 3).toFixed(0)}`;
    if(+(percent * 3).toFixed(0) > 99) {
      imgTextOpacity = 1;
    }

    if(+(percent * 3).toFixed(0) < 10) {
      imgTextOpacity = 0.1;
    }

    let transTitle = 100 - (percent * 2).toFixed(0);
    let transDesc = transTitle * .6;
    if(+(percent * 2).toFixed(0) > 100) {
      transTitle = 0;
    }

    if(transDesc < 0) {
      transDesc = 0;
    }


    if(percent > 50) {
      imgTextOpacity = `0.${(100 - percent).toFixed(0)}`;

      if((100 - percent).toFixed(0) < 10) {
        imgTextOpacity = 0.1
      }

      transTitle = (50 - percent).toFixed(0);
      transDesc = transTitle * .6;
    }

    imgTitle.css({
      'transform': 'translateY(' + transTitle + 'px)',
      'opacity': imgTextOpacity
    })

    imgText.css({
      'transform': 'translateY(' + transDesc + 'px)',
      'opacity': imgTextOpacity
    })
  } else if(pageYOffset < dh * 4) {
    hiddenAll(pages);

    pages.eq(3).css({
      'z-index': '51',
      'opacity': '1'
    });
    const img4 = $('.image-text__img--4');

    const imgTitle = $('.image-text__title');
    const imgText = $('.image-text__desc');

    img4.css('opacity', '0');

    imgTitle.css({
      'transform': 'translateY(100px)'
    })

    imgText.css({
      'transform': 'translateY(100px)',
    })

    // calc percent
    const percent = (pageYOffset - dh * 3) * 100 / dh;
    let opacityImg = `0.${(percent * 2.5).toFixed(0)}`;
    if((percent * 2.5).toFixed(0) > 99) {
      opacityImg = 1
    }

    if(percent > 10) {
      img4.css('opacity', opacityImg);
    }

    let imgTextOpacity = `0.${(percent * 3).toFixed(0)}`;
    if(+(percent * 3).toFixed(0) > 99) {
      imgTextOpacity = 1;
    }

    if(+(percent * 3).toFixed(0) < 10) {
      imgTextOpacity = 0.1;
    }

    let transTitle = 100 - (percent * 2).toFixed(0);
    let transDesc = transTitle * .6;
    if(+(percent * 2).toFixed(0) > 100) {
      transTitle = 0;
    }

    if(transDesc < 0) {
      transDesc = 0;
    }


    if(percent > 50) {
      imgTextOpacity = `0.${(100 - percent).toFixed(0)}`;

      if((100 - percent).toFixed(0) < 10) {
        imgTextOpacity = 0.1
      }

      transTitle = (50 - percent).toFixed(0);
      transDesc = transTitle * .6;
    }

    imgTitle.css({
      'transform': 'translateY(' + transTitle + 'px)',
      'opacity': imgTextOpacity
    })

    imgText.css({
      'transform': 'translateY(' + transDesc + 'px)',
      'opacity': imgTextOpacity
    })
  } else if(pageYOffset < dh * 5) {
    hiddenAll(pages);

    // shapeText();

    pages.eq(4).css({
      'z-index': '51',
      'opacity': '1'
    });

    const shapeText = $('.shape__text');
    const shapeImages = $('.shape__img');
    const shapeCircle = $('.shape__circle');

    shapeImages.each(function () {
      $(this).css('opacity', '0');
      $(this).css('transform', 'rotate(0)');
    })

    shapeCircle.each(function () {
      $(this).css('opacity', '0');
    })

    shapeText.css('opacity', '0');
    // calc percent
    const percent = (pageYOffset - dh * 4) * 100 / dh;

    if(percent > 2.5) {
      shapeImages.eq(0).css({
        'opacity': '1',
        'transform': 'rotate(0)'
      })
    } else {
      shapeImages.eq(0).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }
    if(percent > 2.5 * 2) {
      shapeImages.eq(1).css({
        'opacity': '1',
        'transform': 'rotate(-22.5deg)'
      })
    } else {
      shapeImages.eq(1).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }
    if(percent > 2.5 * 3) {
      shapeImages.eq(2).css({
        'opacity': '1',
        'transform': 'rotate(-45deg)'
      })
    } else {
      shapeImages.eq(2).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }

    if(percent > 2.5 * 4) {
      shapeImages.eq(3).css({
        'opacity': '1',
        'transform': 'rotate(-67.5deg)'
      })
    } else {
      shapeImages.eq(3).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }

    if(percent > 2.5 * 5) {
      shapeImages.eq(4).css({
        'opacity': '1',
        'transform': 'rotate(-90deg)'
      })
    } else {
      shapeImages.eq(4).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }

    if(percent > 2.5 * 6) {
      shapeImages.eq(5).css({
        'opacity': '1',
        'transform': 'rotate(-112.5deg)'
      })
    } else {
      shapeImages.eq(5).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }

    if(percent > 2.5 * 7) {
      shapeImages.eq(6).css({
        'opacity': '1',
        'transform': 'rotate(-135deg)'
      })
    } else {
      shapeImages.eq(6).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }

    if(percent > 2.5 * 8) {
      shapeImages.eq(7).css({
        'opacity': '1',
        'transform': 'rotate(-157.5deg)'
      })
    } else {
      shapeImages.eq(7).css({
        'opacity': '0',
        'transform': 'rotate(0)'
      })
    }

    if(percent > 2.5 * 9) {
      shapeCircle.eq(0).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 10) {
      shapeCircle.eq(1).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 11) {
      shapeCircle.eq(2).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 12) {
      shapeCircle.eq(3).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 13) {
      shapeCircle.eq(4).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 14) {
      shapeCircle.eq(5).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 15) {
      shapeCircle.eq(6).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 16) {
      shapeCircle.eq(7).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 17) {
      shapeCircle.eq(8).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 18) {
      shapeCircle.eq(9).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 19) {
      shapeCircle.eq(10).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 20) {
      shapeCircle.eq(11).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 21) {
      shapeCircle.eq(12).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 22) {
      shapeCircle.eq(13).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 23) {
      shapeCircle.eq(14).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 24) {
      shapeCircle.eq(15).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    if(percent > 2.5 * 25) {
      shapeCircle.eq(16).css({
        'opacity': '1',
      })
    } else {
      shapeCircle.eq(0).css({
        'opacity': '0'
      })
    }

    const paragraph = $('.shape__text p');
    const padding = $('.shape__padding');
    shapeText.css({
      'opacity': '0',
      'max-height': $(window).height() + 'px',
    })
    padding.css('height', paddingHeight + 'px');
    const paddingHeight = $(window).height();
    const smallPadding = $(window).height() / 2 - 60;
    let opacity = 1;
    paragraph.each(function () {
      $(this).css('opacity', opacity);
      opacity = opacity > 0 ? opacity - 0.3 : 0;
    });

    if(percent > 75) {
      if($(window).width() > 1060) {
        $('.shape__imgs').css('margin-left', 'calc(100% - 581px)');
      } else {
        $('.shape__imgs').css('margin-left', '0');
      }



      shapeText.css('overflow', 'auto');
      shapeText.css('transition', 'all .3s');
      shapeText.css('opacity', '1');
      padding.css({
        'transition': 'all .6s',
        'height': smallPadding + 'px'
      });
    } else {
      $('.shape__imgs').css('margin-left', '0');
    }
  } else if(pageYOffset < dh * 6) {
    hiddenAll(pages);

    // shapeText();

    pages.eq(5).css({
      'z-index': '51',
      'opacity': '1'
    });

    const title = $('.collections .collect__nav-box .title');
    const collection = $('.collect-slider__item');

    title.css({
      'transform': 'translateY(100px)'
    })

    collection.each(function () {
      $(this).css({
        'transform': 'translateY(100px)'
      })
    })

    // calc percent
    const percent = (pageYOffset - dh * 5) * 100 / dh;
    let opacity = `0.${(percent * 2.5).toFixed(0)}`;
    if((percent * 2.5).toFixed(0) > 99) {
      opacity = 1
    }

    let imgOpacity = `0.${(percent * 3).toFixed(0)}`;
    if(+(percent * 3).toFixed(0) > 99) {
      imgOpacity = 1;
    }

    if(+(percent * 3).toFixed(0) < 10) {
      imgOpacity = 0.1;
    }

    let transTitle = 100 - (percent * 2).toFixed(0);
    let transImg = transTitle * .6;
    if(+(percent * 2).toFixed(0) > 100) {
      transTitle = 0;
    }

    if(transImg < 0) {
      transImg = 0;
    }


    if(percent > 50) {
      imgOpacity = `0.${(100 - percent).toFixed(0)}`;

      if((100 - percent).toFixed(0) < 10) {
        imgOpacity = 0.1
      }

      transTitle = (50 - percent).toFixed(0);
      transImg = transTitle * .6;
    }

    title.css({
      'transform': 'translateY(' + transTitle + 'px)',
      'opacity': imgOpacity
    })
    collection.each(function (index = 1) {
      index = index + 3.5;
      transImg = transTitle * index;

      if(transImg < 0) {
        transImg = 0;
      }
      $(this).css({
        'transform': 'translateY(' + transImg + 'px)',
        'opacity': imgOpacity
      })
    })
  } else if(pageYOffset < dh * 7) {
    hiddenAll(pages);

    pages.eq(6).css({
      'z-index': '51',
      'opacity': '1'
    });

    const col = $('.list__col');
    const text = $('.list__text');

    text.css({
      'transform': 'translateY(100px)'
    })

    col.each(function () {
      $(this).css({
        'transform': 'translateY(100px)'
      })
    })

    // calc percent
    const percent = (pageYOffset - dh * 6) * 100 / dh;

    let trans = 100 - (percent * 2).toFixed(0);
    let transImg = trans * .6;
    if(+(percent * 2).toFixed(0) > 100) {
      trans = 0;
    }

    if(transImg < 0) {
      transImg = 0;
    }


    if(percent > 50) {
      trans = (50 - percent).toFixed(0);
      transImg = trans * .6;
    }

    text.css({
      'transform': 'translateY(' + trans + 'px)'
    })
    col.each(function (index = 1) {
      index = index + 3.5 / percent;
      transImg = trans * index;

      if(transImg < 0) {
        transImg = 0;
      }
      $(this).css({
        'transform': 'translateY(' + transImg + 'px)'
      })
    })
  } else if(pageYOffset < dh * 8) {
    hiddenAll(pages);

    pages.eq(7).css({
      'z-index': '51',
      'opacity': '1'
    });

    if($(window).width() > 1060) {
      const title = $('.event__title');
      const text = $('.event__desc');
      const link = $('.text__bottom .arrow-link');

      title.css({
        'transform': 'translateY(100px)'
      })
      text.css({
        'transform': 'translateY(100px)'
      })
      link.css({
        'transform': 'translateY(100px)'
      })

      // calc percent
      const percent = (pageYOffset - dh * 7) * 100 / dh;

      let trans = 100 - (percent * 2).toFixed(0);
      let transImg = trans * .6;
      if(+(percent * 2).toFixed(0) > 100) {
        trans = 0;
      }

      if(transImg < 0) {
        transImg = 0;
      }

      let opacity = `0.${(percent * 3).toFixed(0)}`;
      if(+(percent * 3).toFixed(0) > 99) {
        opacity = 1;
      }

      if(+(percent * 3).toFixed(0) < 10) {
        opacity = 0.1;
      }

      let transTitle = 100 - (percent * 2).toFixed(0);
      let transDesc = transTitle * .6;
      let transLink = transDesc * .6;
      if(+(percent * 2).toFixed(0) > 100) {
        transTitle = 0;
      }

      if(transDesc < 0) {
        transDesc = 0;
      }

      if(transLink < 0) {
        transLink = 0;
      }


      if(percent > 50) {
        opacity = `0.${(100 - percent).toFixed(0)}`;

        if((100 - percent).toFixed(0) < 10) {
          opacity = 0.1
        }

        transTitle = (50 - percent).toFixed(0);
        transDesc = transTitle * .6;
        transLink = transDesc * .6;
      }

      title.css({
        'transform': 'translateY(' + transTitle + 'px)',
        'opacity': opacity
      })

      text.css({
        'transform': 'translateY(' + transDesc + 'px)',
        'opacity': opacity
      })

      link.css({
        'transform': 'translateY(' + transLink + 'px)',
        'opacity': opacity
      })

      if(percent > 80) {
        $('.event__video-block').css({
          'transform': 'translateY(' + transTitle * 2 + 'px)',
          'transition': 'all .3s'
        })
      } else {
        $('.event__video-block').css({
          'transform': 'translateY(0px)',
          'transition': 'all .3s'
        })
      }
    }
  } else if(pageYOffset < dh * 9) {
    hiddenAll(pages);

    pages.eq(8).css({
      'z-index': '51',
      'opacity': '1'
    });

    if($(window).width() > 1060) {
      const title = $('.blog__title');
      const item = $('.blog__list .list__row .item');

      title.css({
        'transform': 'translateY(100px)'
      })

      item.each(function () {
        $(this).css({
          'transform': 'translateY(100px)'
        })
      })

      // calc percent
      const percent = (pageYOffset - dh * 8) * 100 / dh;
      let opacity = `0.${(percent * 2.5).toFixed(0)}`;
      if((percent * 2.5).toFixed(0) > 99) {
        opacity = 1
      }

      let imgOpacity = `0.${(percent * 3).toFixed(0)}`;
      if(+(percent * 3).toFixed(0) > 99) {
        imgOpacity = 1;
      }

      if(+(percent * 3).toFixed(0) < 10) {
        imgOpacity = 0.1;
      }

      let transTitle = 100 - (percent * 2).toFixed(0);
      let transImg = transTitle * .6;
      if(+(percent * 2).toFixed(0) > 100) {
        transTitle = 0;
      }

      if(transImg < 0) {
        transImg = 0;
      }


      if(percent > 50) {
        imgOpacity = `0.${(100 - percent).toFixed(0)}`;

        if((100 - percent).toFixed(0) < 10) {
          imgOpacity = 0.1
        }

        transTitle = (50 - percent).toFixed(0);
        transImg = transTitle * .6;
      }

      title.css({
        'transform': 'translateY(' + transTitle + 'px)',
        'opacity': imgOpacity
      })
      item.each(function (index = 1) {
        index = index + 3.5 / percent;
        transImg = transTitle * index;
        imgOpacity = imgOpacity / index * 1.5;

        if(transImg < 0) {
          transImg = 0;
        }
        $(this).css({
          'transform': 'translateY(' + transImg + 'px)',
          'opacity': imgOpacity
        })
      })
    } else {
      // $('.fullPage-wrapper').addClass('fullPage-wrapper--active');
    }
  } else if(pageYOffset < dh * 10) {
    hiddenAll(pages);

    pages.eq(9).css({
      'z-index': '51',
      'opacity': '1'
    });

    const top = $('.home-about__col .coll__top');
    const center = $('.home-about__col .coll__center');
    const bottom = $('.home-about__col .coll__bottom');

    // calc percent
    const percent = (pageYOffset - dh * 9) * 100 / dh;
    let opacity = `0.${(percent * 2.5).toFixed(0)}`;
    if((percent * 2.5).toFixed(0) > 99) {
      opacity = 1
    }

    let trans = 100 - (percent * 2).toFixed(0);
    if(+(percent * 2).toFixed(0) > 100) {
      trans = 0;
    }

    // top.each(function (index = 1) {
    //   index = index + 3.5 / percent;
    //   trans = trans * index;
    //   opacity = opacity / index * 1.5;
    //
    //   if(trans < 0) {
    //     trans = 0;
    //   }
    //   $(this).css({
    //     'transform': 'translateY(' + trans + 'px)',
    //     'opacity': opacity
    //   })
    // })
  } else {
    hiddenAll(pages);
  }
}

const scrollAnim = () => {
  if($('.fullPage__box').length < 1) {
    return
  }
  console.log(pageYOffset);
  // first block
  if(pageYOffset === 0) {
    const first = $('.home-first');
    first.css({
      'opacity': 1
    })
  }
  if(pageYOffset > 0) {
    const n1 = 1;
    const n2 = 200;
    const N = n2 - n1;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if(op < 0.1) {
      op = 0;
    }

    if(op > 0.9) {
      op = 1
    }

    const block = $('.home-first');
    block.css({
      'opacity': op
    });
  }
  // second block title
  if(pageYOffset > 200) {
    const n1 = 200;
    const n2 = 402;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const tr1 = 100;
    const tr2 = 0;
    let op = op2 * (p / 100);
    let tr = tr1 - (tr1 * (p / 100));

    if(p > 99) {
      op = 1;
      tr = 0;
    }

    if(p < 1) {
      op = 0;
      tr = 100;
    }

    const title = $('.home-text__title');
    const block = $('.home-text').eq(0);

    block.css({
      'opacity': 1
    })

    title.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const block = $('.home-text').eq(0);
    const desc = $('.home-text__desc');
    const title = $('.home-text__title');

    block.css({
      'opacity': 0
    });

    title.css({
      'transform': 'translateY(100px)'
    });

    desc.css({
      'opacity': 0
    });
  }

  // second block desc
  if(pageYOffset > 295) {
    const n1 = 295;
    const n2 = 511;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const tr1 = 100;
    const tr2 = 0;
    let op = op2 * (p / 100);
    let tr = tr1 - (tr1 * (p / 100));

    if(p > 99) {
      op = 1;
      tr = 0;
    }

    if(p < 1) {
      op = 0;
      tr = 100;
    }

    const desc = $('.home-text__desc');

    desc.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const desc = $('.home-text__desc');

    desc.css({
      'transform': 'translateY(100px)'
    })
  }

  // second block title hidden
  if(pageYOffset > 1000) {
    const n1 = 1000;
    const n2 = 1200;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    const tr1 = 0;
    const tr2 = 100;
    let op = op1 - (op1 * (p / 100));
    let tr = -tr2 * (p / 100);

    if(p > 99) {
      op = 0;
      tr = -100;
    }

    if(p < 1) {
      op = 1;
      tr = 0;
    }

    const title = $('.home-text__title');

    title.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  }

  // second block desc hidden
  if(pageYOffset > 1100) {
    const n1 = 1100;
    const n2 = 1300;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    const tr1 = 0;
    const tr2 = 100;
    let op = op1 - (op1 * (p / 100));
    let tr = -tr2 * (p / 100);

    if(p > 99) {
      op = 0;
      tr = -100;
    }

    if(p < 1) {
      op = 1;
      tr = 0;
    }

    const desc = $('.home-text__desc');

    desc.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  }

  // image-text 1 img
  if(pageYOffset > 1400) {
    const n1 = 1400;
    const n2 = 1600;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const img1 = $('.image-text__img--1');
    const img2 = $('.image-text__img--2');
    const img3 = $('.image-text__img--3');
    const block = $('.image-text').eq(0);

    block.css({
      'opacity': 1
    });

    img1.css({
      'opacity': op,
    });
    img2.css({
      'opacity': op,
    });
    img3.css({
      'opacity': op,
    });
  } else {
    const block = $('.image-text').eq(0);

    block.css({
      'opacity': 0
    });
  }

  // image-text 1 title
  if(pageYOffset > 1850) {
    const n1 = 1850;
    const n2 = 2050;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 60;
    const tr2 = 0;
    let tr = tr1 - (tr1 * (p / 100));

    if(p > 99) {
      tr = 0;
    }

    if(p < 1) {
      tr = 60;
    }

    const title = $('.image-text__title').eq(0);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(' + tr + 'px)',
    });
  } else {
    const title = $('.image-text__title').eq(0);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(60px)',
    });
  }

  // image-text 1 desc
  if(pageYOffset > 1945) {
    const n1 = 1945;
    const n2 = 2245;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const tr1 = 60;
    const tr2 = 0;
    let op = op2 * (p / 100);
    let tr = tr1 - (tr1 * (p / 100));

    if(p > 99) {
      tr = 0;
      op = 1;
    }

    if(p < 1) {
      tr = 60;
      op = 0;
    }

    const desc = $('.image-text__desc').eq(0);

    desc.css({
      'transform': 'translateY(' + tr + 'px)',
      'opacity': op
    });
  } else {
    const desc = $('.image-text__desc').eq(0);

    desc.css({
      'transform': 'translateY(60px)',
      'opacity': 0
    });
  }

  // image-text 1 title hidden
  if(pageYOffset > 2610) {
    const n1 = 2610;
    const n2 = 2810;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 0;
    const tr2 = 60;
    let tr = tr2 * (p / 100);

    if(p > 99) {
      tr = 60;
    }

    if(p < 1) {
      tr = 0;
    }

    const title = $('.image-text__title').eq(0);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(' + tr + 'px)',
    });
  }

  // image-text 1 desc hidden
  if(pageYOffset > 3005) {
    const n1 = 3005;
    const n2 = 3205;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    const tr1 = 0;
    const tr2 = 60;
    let op = op1 - (op1 * (p / 100));
    let tr = tr2 * (p / 100);

    if(p > 99) {
      tr = 60;
      op = 0;
    }

    if(p < 1) {
      tr = 0;
      op = 1;
    }

    const desc = $('.image-text__desc').eq(0);

    desc.css({
      'transform': 'translateY(' + tr + 'px)',
      'opacity': op
    });
  }

  // image-text 2 img
  if(pageYOffset > 3205) {
    const n1 = 3205;
    const n2 = 3410;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const img1 = $('.image-text__img--1');
    const img2 = $('.image-text__img--2');
    const img3 = $('.image-text__img--3');
    const img4 = $('.image-text__img--4');
    const block = $('.image-text').eq(1);

    block.css({
      'opacity': 1
    });

    img1.css({
      'opacity': 0,
    });
    img2.css({
      'opacity': 0,
    });
    img3.css({
      'opacity': 0,
    });
    img4.css({
      'opacity': op,
    });
  } else {
    const block = $('.image-text').eq(1);

    block.css({
      'opacity': 0
    });
  }

  // image-text 2 title
  if(pageYOffset > 3410) {
    const n1 = 3410;
    const n2 = 3595;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 60;
    const tr2 = 0;
    let tr = tr1 - (tr1 * (p / 100));

    if(p > 99) {
      tr = 0;
    }

    if(p < 1) {
      tr = 60;
    }

    const title = $('.image-text__title').eq(1);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(' + tr + 'px)',
    });
  } else {
    const title = $('.image-text__title').eq(1);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(60px)',
    });
  }

  // image-text 2 desc
  if(pageYOffset > 3505) {
    const n1 = 3505;
    const n2 = 3690;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const tr1 = 60;
    const tr2 = 0;
    let op = op2 * (p / 100);
    let tr = tr1 - (tr1 * (p / 100));

    if(p > 99) {
      tr = 0;
      op = 1;
    }

    if(p < 1) {
      tr = 60;
      op = 0;
    }

    const desc = $('.image-text__desc').eq(1);

    desc.css({
      'transform': 'translateY(' + tr + 'px)',
      'opacity': op
    });
  } else {
    const desc = $('.image-text__desc').eq(1);

    desc.css({
      'transform': 'translateY(60px)',
      'opacity': 0
    });
  }

  // image-text 2 title hidden
  if(pageYOffset > 4150) {
    const n1 = 4150;
    const n2 = 4326;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 0;
    const tr2 = 60;
    let tr = tr2 * (p / 100);

    if(p > 99) {
      tr = 60;
    }

    if(p < 1) {
      tr = 0;
    }

    const title = $('.image-text__title').eq(1);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(' + tr + 'px)',
    });
  }

  // image-text 2 desc hidden
  if(pageYOffset > 4238) {
    const n1 = 4238;
    const n2 = 4414;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    const tr1 = 0;
    const tr2 = 60;
    let op = op1 - (op1 * (p / 100));
    let tr = tr2 * (p / 100);

    if(p > 99) {
      tr = 60;
      op = 0;
    }

    if(p < 1) {
      tr = 0;
      op = 1;
    }

    const desc = $('.image-text__desc').eq(1);

    desc.css({
      'transform': 'translateY(' + tr + 'px)',
      'opacity': op
    });
  }

  // img-text 2 hidden
  if(pageYOffset > 4414) {
    const n1 = 4414;
    const n2 = 4514;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if(p > 99) {
      op = 0;
    }

    if(p < 1) {
      op = 1;
    }

    const block = $('.image-text').eq(1);

    block.css({
      'opacity': op
    });
  }

  // shape shape-1
  if(pageYOffset > 4614) {
    const n1 = 4614;
    const n2 = 4714;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const shape = $('.shape__img--1');
    const text = $('.shape__text');
    const block = $('.shape');

    text.css({
      'transform': 'translateY(100%)'
    })

    block.css({
      'opacity': 1
    })

    shape.css({
      'opacity': op
    });
  } else {
    const shape = $('.shape__img--1');
    const block = $('.shape');

    block.css({
      'opacity': 0
    })

    shape.css({
      'opacity': 0
    });
  }

  // shape rotate all
  if(pageYOffset > 4714) {
    const n1 = 4714;
    const n2 = 4814;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const rt2 = 22.5;
    const rt3 = 45;
    const rt4 = 67.5;
    const rt5 = 90;
    const rt6 = 112.5;
    const rt7 = 135;
    const rt8 = 157.5;
    let op = op2 * (p / 100);
    let rtf2 = -rt2 * (p / 100);
    let rtf3 = -rt3 * (p / 100);
    let rtf4 = -rt4 * (p / 100);
    let rtf5 = -rt5 * (p / 100);
    let rtf6 = -rt6 * (p / 100);
    let rtf7 = -rt7 * (p / 100);
    let rtf8 = -rt8 * (p / 100);

    if(p > 99) {
      op = 1;
      rtf2 = -22.5;
      rtf3 = -45;
      rtf4 = -67.5;
      rtf5 = -90;
      rtf6 = -112.5;
      rtf7 = -135;
      rtf8 = -157.5;
    }

    if(p < 1) {
      op = 0;
      rtf2 = 0;
      rtf3 = 0;
      rtf4 = 0;
      rtf5 = 0;
      rtf6 = 0;
      rtf7 = 0;
      rtf8 = 0;
    }

    const shape2 = $('.shape__img--2');
    const shape3 = $('.shape__img--3');
    const shape4 = $('.shape__img--4');
    const shape5 = $('.shape__img--5');
    const shape6 = $('.shape__img--6');
    const shape7 = $('.shape__img--7');
    const shape8 = $('.shape__img--8');

    shape2.css({
      'opacity': op,
      'transform': 'rotate(' + rtf2 + 'deg)'
    });
    shape3.css({
      'opacity': op,
      'transform': 'rotate(' + rtf3 + 'deg)'
    });
    shape4.css({
      'opacity': op,
      'transform': 'rotate(' + rtf4 + 'deg)'
    });
    shape5.css({
      'opacity': op,
      'transform': 'rotate(' + rtf5 + 'deg)'
    });
    shape6.css({
      'opacity': op,
      'transform': 'rotate(' + rtf6 + 'deg)'
    });
    shape7.css({
      'opacity': op,
      'transform': 'rotate(' + rtf7 + 'deg)'
    });
    shape8.css({
      'opacity': op,
      'transform': 'rotate(' + rtf8 + 'deg)'
    });
  } else {
    const shape2 = $('.shape__img--2');
    const shape3 = $('.shape__img--3');
    const shape4 = $('.shape__img--4');
    const shape5 = $('.shape__img--5');
    const shape6 = $('.shape__img--6');
    const shape7 = $('.shape__img--7');
    const shape8 = $('.shape__img--8');

    shape2.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
    shape3.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
    shape4.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
    shape5.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
    shape6.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
    shape7.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
    shape8.css({
      'opacity': 0,
      'transform': 'rotate(' + 0 + 'deg)'
    });
  }

  // shape circle 1
  if(pageYOffset > 4914) {
    const n1 = 4914;
    const n2 = 5014;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--1');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--1');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 2
  if(pageYOffset > 4934) {
    const n1 = 4934;
    const n2 = 5034;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--2');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--2');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 3
  if(pageYOffset > 4954) {
    const n1 = 4954;
    const n2 = 5054;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--3');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--3');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 4
  if(pageYOffset > 4974) {
    const n1 = 4974;
    const n2 = 5074;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--4');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--4');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 5
  if(pageYOffset > 4994) {
    const n1 = 4994;
    const n2 = 5094;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--5');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--5');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 6
  if(pageYOffset > 5014) {
    const n1 = 5014;
    const n2 = 5114;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--6');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--6');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 7
  if(pageYOffset > 5034) {
    const n1 = 5034;
    const n2 = 5134;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--7');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--7');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 8
  if(pageYOffset > 5054) {
    const n1 = 5054;
    const n2 = 5154;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--8');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--8');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 9
  if(pageYOffset > 5074) {
    const n1 = 5074;
    const n2 = 5174;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--9');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--9');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 10
  if(pageYOffset > 5094) {
    const n1 = 5094;
    const n2 = 5194;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--10');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--10');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 11
  if(pageYOffset > 5114) {
    const n1 = 5114;
    const n2 = 5214;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--11');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--11');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 12
  if(pageYOffset > 5134) {
    const n1 = 5134;
    const n2 = 5234;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--12');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--12');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 13
  if(pageYOffset > 5154) {
    const n1 = 5154;
    const n2 = 5254;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--13');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--13');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 14
  if(pageYOffset > 5174) {
    const n1 = 5174;
    const n2 = 5274;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--14');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--14');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 15
  if(pageYOffset > 5194) {
    const n1 = 5194;
    const n2 = 5294;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--15');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--15');

    circle.css({
      'opacity': 0,
    });
  }

  // shape circle 16
  if(pageYOffset > 5214) {
    const n1 = 5214;
    const n2 = 5314;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const circle = $('.shape__circle--16');

    circle.css({
      'opacity': op,
    });
  } else {
    const circle = $('.shape__circle--16');

    circle.css({
      'opacity': 0,
    });
  }

  // shape left
  if(pageYOffset > 5414) {
    const n1 = 5414;
    const n2 = 5614;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr2 = 429;
    let tr = tr2 * (p / 100);

    if(p > 99) {
      tr = 429;
    }

    if(p < 1) {
      tr = 0;
    }

    const imgs = $('.shape__imgs');

    imgs.css({
      'transform': 'translateX(' + tr + 'px)',
    });
  } else {
    const imgs = $('.shape__imgs');

    imgs.css({
      'transform': 'translateX(0)',
    });
  }

  // shape text
  if(pageYOffset > 5523) {
    const n1 = 5523;
    const n2 = 5814;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    let tr = 100 - p;

    if(p > 99) {
      tr = 0;
    }

    if(p < 1) {
      tr = 100;
    }

    const text = $('.shape__text');

    text.css({
      'transform': 'translateY(' + tr + '%)',
    });
  } else {
    const text = $('.shape__text');

    text.css({
      'transform': 'translateY(' + 100 + '%)',
    });
  }

  // shape text
  if(pageYOffset > 5814) {
    const n1 = 5814;
    const n2 = 6014;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if(p > 99) {
      op = 0;
    }

    if(p < 1) {
      op = 1;
    }

    const block = $('.shape');

    block.css({
      'opacity': op
    });
  }

  // collection title
  if(pageYOffset > 6114) {
    const n1 = 6114;
    const n2 = 6320;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const tr1 = 60;
    const tr2 = 0;
    let tr = tr1 - (tr1 * (p / 100));
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
      tr = 0;
    }

    if(p < 1) {
      op = 0;
      tr = 60;
    }

    const block = $('.collections');
    const title = $('.collections .collect__nav-box .title');
    const items = $('.collections__slider .collect-slider__item');

    block.css({
      'opacity': 1
    });

    title.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px'
    });

    items.css({
      'opacity': 0
    })
  } else {
    const block = $('.collections');
    const title = $('.collections .collect__nav-box .title');

    block.css({
      'opacity': 0
    });

    title.css({
      'opacity': 0,
      'transform': 'translateY(' + 60 + 'px'
    });
  }

  // collection nav
  if(pageYOffset > 6221) {
    const n1 = 6221;
    const n2 = 6427;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
    }

    if(p < 1) {
      op = 0;
    }

    const nav = $('.collections__slider .owl-nav');

    nav.css({
      'opacity': op
    });
  } else {
    const nav = $('.collections__slider .owl-nav');

    nav.css({
      'opacity': 0
    });
  }

  // collection items
  if(pageYOffset > 6427) {
    const items = $('.collections__slider .collect-slider__item');
    const length = items.length;
    let count = 0;
    items.each(function () {
      const index = count * 118;
      const n1 = 6427 + index;
      const n2 = 6671 + index;
      const n = pageYOffset - n1;
      const p = n / (n2 - n1) * 100;
      const op1 = 0;
      const op2 = 1;
      const tr2 = 60;
      let tr = tr2 - (tr2 * (p / 100));
      let op = op2 * (p / 100);

      if(p > 99) {
        op = 1;
        tr = 0;
      }

      if(p < 1) {
        op = 0;
        tr = 60;
      }

      $(this).css({
        'opacity': op,
        'transform': 'translateY(' + tr + 'px)'
      })

      count++;
    });
  } else {
    const items = $('.collections__slider .collect-slider__item');

    items.css({
      'opacity': 0,
      'transform': 'translateY(' + 60 + 'px)'
    });
  }

  // collection title hidden
  if(pageYOffset > 7700) {
    const n1 = 7700;
    const n2 = 7905;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    const tr1 = 0;
    const tr2 = 60;
    let tr = -tr2 * (p / 100);
    let op = op1 - (op1 * (p / 100));

    if(p > 99) {
      op = 0;
      tr = -60;
    }

    if(p < 1) {
      op = 1;
      tr = 0;
    }

    const title = $('.collections .collect__nav-box .title');

    title.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px'
    });
  }

  // collection nav hidden
  if(pageYOffset > 7804) {
    const n1 = 7804;
    const n2 = 8009;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if(p > 99) {
      op = 0;
    }

    if(p < 1) {
      op = 1;
    }

    const nav = $('.collections__slider .owl-nav');

    nav.css({
      'opacity': op
    });
  }

  // collection items hidden
  if(pageYOffset > 8009) {
    const items = $('.collections__slider .collect-slider__item');
    let count = 0;
    items.each(function () {
      const index = count * 94;
      const n1 = 8009 + index;
      const n2 = 8214 + index;
      const n = pageYOffset - n1;
      const p = n / (n2 - n1) * 100;
      const op1 = 1;
      const op2 = 0;
      const tr2 = 60;
      let tr = -tr2 * (p / 100);
      let op = op1 - (op1 * (p / 100));

      if(p > 99) {
        op = 0;
        tr = -60;
      }

      if(p < 1) {
        op = 1;
        tr = 0;
      }

      $(this).css({
        'opacity': op,
        'transform': 'translateY(' + tr + 'px)'
      })

      count++;
    });
  }

  // list
  if(pageYOffset > 9050) {
    const n1 = 9050;
    const n2 = 10656;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    const tr2 = 654;
    let tr = tr2 - (tr2 * (p / 100));
    let op = op2 * (p / 100);

    if(p > 99) {
      op = 1;
      tr = 0;
    }

    if(p < 1) {
      op = 0;
      tr = 654;
    }

    const block = $('.list');
    const col = $('.list__col');
    const text = $('.list__text');

    block.css({
      'opacity': 1,
      'z-index': 10000
    })

    col.css({
      'opacity': 0
    })

    text.css({
      'opacity': 0
    })

    col.eq(0).css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const block = $('.list');

    block.css({
      'opacity': 0
    })
  }
}






















const bodyHeight = () => {
  if($('.fullPage__box').length < 1) {
    return
  }

  $('body').css('height', '16074px');
}

const hiddenAll = (pages) => {
  pages.css({
    'opacity': '0',
    'z-index': '50'
  })
}

export { scrollSwitch, scrollAnim, bodyHeight }