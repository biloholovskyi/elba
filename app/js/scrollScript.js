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

const hiddenAll = (pages) => {
  pages.css({
    'opacity': '0',
    'z-index': '50'
  })
}

export { scrollSwitch }