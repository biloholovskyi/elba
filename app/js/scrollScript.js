const scrollAnim = () => {
  if ($('.fullPage__box').length < 1) {
    return
  }

  if (pageYOffset > 200) {
    $('.follow-us__link').addClass('follow-us__link--dark');
    $('.header').removeClass('header--white');
  } else {
    $('.follow-us__link').removeClass('follow-us__link--dark');
    $('.header').addClass('header--white');
  }

  // first block
  if (pageYOffset === 0) {
    const first = $('.home-first');
    first.css({
      'opacity': 1
    })
  }
  if (pageYOffset > 0) {
    const n1 = 1;
    const n2 = 200;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    let op = op1 - (op1 * (p / 100));

    if (op < 0.1) {
      op = 0;
    }

    if (op > 0.9) {
      op = 1
    }

    const block = $('.home-first');
    block.css({
      'opacity': op,
      'z-index': 51
    });
  }
  // second block title
  if (pageYOffset > 200) {
    const n1 = 200;
    const n2 = 402;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    const tr1 = 100;
    let op = op2 * (p / 100);
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      op = 1;
      tr = 0;
    }

    if (p < 1) {
      op = 0;
      tr = 100;
    }

    const title = $('.home-text__title');
    const block = $('.home-text').eq(0);

    block.css({
      'opacity': 1,
      'z-index': 52
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
      'opacity': 0,
      'z-index': 50
    });

    title.css({
      'transform': 'translateY(100px)'
    });

    desc.css({
      'opacity': 0
    });
  }

  // second block desc
  if (pageYOffset > 295) {
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

    if (p > 99) {
      op = 1;
      tr = 0;
    }

    if (p < 1) {
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
  if (pageYOffset > 1000) {
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

    if (p > 99) {
      op = 0;
      tr = -100;
    }

    if (p < 1) {
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
  if (pageYOffset > 1100) {
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

    if (p > 99) {
      op = 0;
      tr = -100;
    }

    if (p < 1) {
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
  if (pageYOffset > 1400) {
    const n1 = 1400;
    const n2 = 1600;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const img1 = $('.image-text__img--1');
    const img2 = $('.image-text__img--2');
    const img3 = $('.image-text__img--3');
    const block = $('.image-text').eq(0);

    block.css({
      'opacity': 1,
      'z-index': 53
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
      'opacity': 0,
      'z-index': 50
    });
  }

  // image-text 1 title
  if (pageYOffset > 1850) {
    const n1 = 1850;
    const n2 = 2050;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 60;
    const tr2 = 0;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
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
  if (pageYOffset > 1945) {
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

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 2610) {
    const n1 = 2610;
    const n2 = 2810;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 0;
    const tr2 = 60;
    let tr = tr2 * (p / 100);

    if (p > 99) {
      tr = 60;
    }

    if (p < 1) {
      tr = 0;
    }

    const title = $('.image-text__title').eq(0);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(' + tr + 'px)',
    });
  }

  // image-text 1 desc hidden
  if (pageYOffset > 3005) {
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

    if (p > 99) {
      tr = 60;
      op = 0;
    }

    if (p < 1) {
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
  if (pageYOffset > 3205) {
    const n1 = 3205;
    const n2 = 3410;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const img1 = $('.image-text__img--1');
    const img2 = $('.image-text__img--2');
    const img3 = $('.image-text__img--3');
    const img4 = $('.image-text__img--4');
    const block = $('.image-text').eq(1);

    block.css({
      'opacity': 1,
      'z-index': 54
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
      'opacity': 0,
      'z-index': 50
    });
  }

  // image-text 2 title
  if (pageYOffset > 3410) {
    const n1 = 3410;
    const n2 = 3595;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 60;
    const tr2 = 0;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
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
  if (pageYOffset > 3505) {
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

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 4150) {
    const n1 = 4150;
    const n2 = 4326;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 0;
    const tr2 = 60;
    let tr = tr2 * (p / 100);

    if (p > 99) {
      tr = 60;
    }

    if (p < 1) {
      tr = 0;
    }

    const title = $('.image-text__title').eq(1);
    const titleSpan = title.children('span');

    titleSpan.css({
      'transform': 'translateY(' + tr + 'px)',
    });
  }

  // image-text 2 desc hidden
  if (pageYOffset > 4238) {
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

    if (p > 99) {
      tr = 60;
      op = 0;
    }

    if (p < 1) {
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
  if (pageYOffset > 4414) {
    const n1 = 4414;
    const n2 = 4514;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if (p > 99) {
      op = 0;
    }

    if (p < 1) {
      op = 1;
    }

    const block = $('.image-text').eq(1);

    block.css({
      'opacity': op
    });
  }

  // shape shape-1
  if (pageYOffset > 4614) {
    const n1 = 4614;
    const n2 = 4714;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const shape = $('.shape__img--1');
    const text = $('.shape__text');
    const block = $('.shape');

    text.css({
      'transform': 'translateY(100%)'
    })

    block.css({
      'opacity': 1,
      'z-index': 55
    })

    shape.css({
      'opacity': op
    });
  } else {
    const shape = $('.shape__img--1');
    const block = $('.shape');

    block.css({
      'opacity': 0,
      'z-index': 50
    })

    shape.css({
      'opacity': 0
    });
  }

  // shape rotate all
  if (pageYOffset > 4714) {
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

    if (p > 99) {
      op = 1;
      rtf2 = -22.5;
      rtf3 = -45;
      rtf4 = -67.5;
      rtf5 = -90;
      rtf6 = -112.5;
      rtf7 = -135;
      rtf8 = -157.5;
    }

    if (p < 1) {
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
  if (pageYOffset > 4914) {
    const n1 = 4914;
    const n2 = 5014;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 4934) {
    const n1 = 4934;
    const n2 = 5034;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 4954) {
    const n1 = 4954;
    const n2 = 5054;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 4974) {
    const n1 = 4974;
    const n2 = 5074;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 4994) {
    const n1 = 4994;
    const n2 = 5094;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5014) {
    const n1 = 5014;
    const n2 = 5114;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5034) {
    const n1 = 5034;
    const n2 = 5134;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5054) {
    const n1 = 5054;
    const n2 = 5154;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5074) {
    const n1 = 5074;
    const n2 = 5174;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5094) {
    const n1 = 5094;
    const n2 = 5194;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5114) {
    const n1 = 5114;
    const n2 = 5214;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5134) {
    const n1 = 5134;
    const n2 = 5234;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5154) {
    const n1 = 5154;
    const n2 = 5254;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5174) {
    const n1 = 5174;
    const n2 = 5274;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5194) {
    const n1 = 5194;
    const n2 = 5294;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5214) {
    const n1 = 5214;
    const n2 = 5314;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 5414) {
    const n1 = 5414;
    const n2 = 5614;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr2 = 429;
    let tr = tr2 * (p / 100);

    if (p > 99) {
      tr = 429;
    }

    if (p < 1) {
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
  if (pageYOffset > 5523) {
    const n1 = 5523;
    const n2 = 5814;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    let tr = 100 - p;

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
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
  if (pageYOffset > 5814) {
    const n1 = 5814;
    const n2 = 6014;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if (p > 99) {
      op = 0;
    }

    if (p < 1) {
      op = 1;
    }

    const block = $('.shape');

    block.css({
      'opacity': op
    });
  }

  // collection title
  if (pageYOffset > 6114) {
    const n1 = 6114;
    const n2 = 6320;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    const tr1 = 60;
    let tr = tr1 - (tr1 * (p / 100));
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
      tr = 0;
    }

    if (p < 1) {
      op = 0;
      tr = 60;
    }

    const block = $('.collections');
    const title = $('.collections .collect__nav-box .title');
    const items = $('.collections__slider .collect-slider__item');

    block.css({
      'opacity': 1,
      'z-index': 56
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
      'opacity': 0,
      'z-index': 50
    });

    title.css({
      'opacity': 0,
      'transform': 'translateY(' + 60 + 'px'
    });
  }

  // collection nav
  if (pageYOffset > 6221) {
    const n1 = 6221;
    const n2 = 6427;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
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
  if (pageYOffset > 6427) {
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

      if (p > 99) {
        op = 1;
        tr = 0;
      }

      if (p < 1) {
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
  if (pageYOffset > 7700) {
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

    if (p > 99) {
      op = 0;
      tr = -60;
    }

    if (p < 1) {
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
  if (pageYOffset > 7804) {
    const n1 = 7804;
    const n2 = 8009;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const op2 = 0;
    let op = op1 - (op1 * (p / 100));

    if (p > 99) {
      op = 0;
    }

    if (p < 1) {
      op = 1;
    }

    const nav = $('.collections__slider .owl-nav');

    nav.css({
      'opacity': op
    });
  }

  // collection items hidden
  if (pageYOffset > 8009) {
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

      if (p > 99) {
        op = 0;
        tr = -60;
      }

      if (p < 1) {
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

  // list opacity col 1
  if (pageYOffset > 8414) {
    const n1 = 8414;
    const n2 = 8614;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const block = $('.list');
    const col = $('.list__col');
    const link = $('.list__text .arrow-link');
    const title = $('.list__text .title span');
    const desc = $('.list__text .desc');

    block.css({
      'opacity': 1,
      'z-index': 57
    })

    col.css({
      'opacity': 0
    })

    title.css({
      'transform': 'translateY(' + 30 + 'px)'
    })

    desc.css({
      'opacity': 0
    })

    col.eq(0).css({
      'opacity': op,
    });

    link.css({
      'opacity': op,
    })
  } else {
    const block = $('.list');
    const link = $('.list__text .arrow-link');

    block.css({
      'opacity': 0,
      'z-index': 50
    });

    link.css({
      'opacity': 0,
    });
  }

  // list transition col 1
  if (pageYOffset > 8414) {
    const n1 = 8414;
    const n2 = 9508;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = $(window).height() - 412;
    // const tr1 = 654;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
      tr = $(window).height() - 412;
    }

    const block = $('.list');
    const col = $('.list__col');
    const text = $('.list__text');


    col.eq(0).css({
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const col = $('.list__col');
    col.eq(0).css({
      'transform': 'translateY(' + $(window).height() - 412 + 'px)'
    })
  }

  // list transition col 1 - 2
  if (pageYOffset > 9508) {
    const col = $('.list__col');
    const n1 = 9508;
    const n2 = 10020;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = (col.eq(0).height() - $(window).height()) * -1;
    let tr = tr1 * (p / 100);

    if (p > 99) {
      tr = tr1;
    }

    col.eq(0).css({
      'transform': 'translateY(' + tr + 'px)'
    })
  }

  // list text
  if (pageYOffset > 8506) {
    const n1 = 8506;
    const n2 = 8719;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);
    const tr1 = 50;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      op = 1;
      tr = 0;
    }

    if (p < 1) {
      op = 0;
      tr = 50;
    }

    const desc = $('.list__text .desc');

    desc.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const desc = $('.list__text .desc');

    desc.css({
      'opacity': 0,
      'transform': 'translateY(' + 50 + 'px)'
    })
  }

  // list title
  if (pageYOffset > 8627) {
    const n1 = 8627;
    const n2 = 8840;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = 30;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
      tr = 50;
    }

    const title = $('.list__text .title span');

    title.css({
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const title = $('.list__text .title span');

    title.css({
      'transform': 'translateY(' + 30 + 'px)'
    })
  }

  // list opacity col 2
  if (pageYOffset > 8524) {
    const n1 = 8524;
    const n2 = 8737;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 0;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const col = $('.list__col');

    col.eq(1).css({
      'opacity': op,
    });
  } else {
    const col = $('.list__col');

    col.eq(1).css({
      'opacity': 0,
    });
  }

  // list transition col 2
  if (pageYOffset > 8524) {
    const n1 = 8524;
    const n2 = 9306;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = $(window).height() - 612;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
      tr = $(window).height() - 612;
    }

    const col = $('.list__col');

    col.eq(1).css({
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const col = $('.list__col');
    col.eq(1).css({
      'transform': 'translateY(' + $(window).height() - 612 + 'px)'
    })
  }

  // list transition col 2 - 2
  if (pageYOffset > 9306) {
    const col = $('.list__col');
    const n1 = 9306;
    const n2 = 10020;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = (col.eq(1).height() - $(window).height()) * -1;
    let tr = tr1 * (p / 100);

    if (p > 99) {
      tr = tr1;
    }

    if (p < 1) {
      // tr = 0;
    }


    col.eq(1).css({
      'transform': 'translateY(' + tr + 'px)'
    })
  }

  // list opacity col 3
  if (pageYOffset > 8627) {
    const n1 = 8627;
    const n2 = 8840;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op2 = 1;
    let op = op2 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const col = $('.list__col');

    col.eq(2).css({
      'opacity': op,
    });
  } else {
    const col = $('.list__col');

    col.eq(2).css({
      'opacity': 0,
    });
  }

  // list transition col 3
  if (pageYOffset > 8627) {
    const n1 = 8627;
    const n2 = 9267;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = $(window).height() - 822;
    let tr = tr1 - (tr1 * (p / 100));

    if (p > 99) {
      tr = 0;
    }

    if (p < 1) {
      tr = $(window).height() - 822;
    }

    const col = $('.list__col');

    col.eq(2).css({
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const col = $('.list__col');
    col.eq(2).css({
      'transform': 'translateY(' + $(window).height() - 822 + 'px)'
    })
  }

  // list transition col 3 - 2
  if (pageYOffset > 9267) {
    const col = $('.list__col');
    const n1 = 9267;
    const n2 = 10020;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const tr1 = (col.eq(2).height() - $(window).height()) * -1;
    let tr = tr1 * (p / 100);

    if (p > 99) {
      tr = tr1;
    }

    if (p < 1) {
      // tr = 0;
    }


    col.eq(2).css({
      'transform': 'translateY(' + tr + 'px)'
    })
  }

  // list hidden
  if (pageYOffset > 10020) {
    const n1 = 10020;
    const n2 = 10279;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 260;
    let tr = -tr1 * (p / 100);
    let op = op1 - (op1 * (p / 100));

    if (p > 99) {
      tr = -260;
      op = 0;
    }

    if (p < 1) {
      op = 1;
      tr = 0;
    }

    const block = $('.list');

    block.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else if (pageYOffset > 8414 && pageYOffset) {
    const block = $('.list');

    block.css({
      'opacity': 1,
      'transform': 'translateY(' + 0 + 'px)'
    })
  }

  // event title
  if (pageYOffset > 10502) {
    const n1 = 10502;
    const n2 = 10716;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 40;
    let tr = tr1 - (tr1 * (p / 100));
    let op = op1 * (p / 100);

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
      op = 0;
      tr = 40;
    }

    const block = $('.event');
    const title = $('.event__title');
    const desc = $('.event__desc');
    const link = $('.event__text .arrow-link');
    const video = $('.event__video-block');

    desc.css({
      'opacity': 0
    })

    link.css({
      'opacity': 0
    })

    video.css({
      'opacity': 0
    })

    block.css({
      'opacity': 1,
      'z-index': 58
    });

    title.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const block = $('.event');

    block.css({
      'opacity': 0,
      'z-index': 50
    });
  }

  // event text
  if (pageYOffset > 10621) {
    const n1 = 10621;
    const n2 = 10835;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 40;
    let tr = tr1 - (tr1 * (p / 100));
    let op = op1 * (p / 100);

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
      op = 0;
      tr = 40;
    }

    const desc = $('.event__desc');

    desc.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const desc = $('.event__desc');

    desc.css({
      'opacity': 0,
      'transform': 'translateY(' + 40 + 'px)'
    })
  }

  // event link
  if (pageYOffset > 10716) {
    const n1 = 10716;
    const n2 = 10930;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 40;
    let tr = tr1 - (tr1 * (p / 100));
    let op = op1 * (p / 100);

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
      op = 0;
      tr = 40;
    }

    const link = $('.event__text .arrow-link');

    link.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const link = $('.event__text .arrow-link');

    link.css({
      'opacity': 0,
      'transform': 'translateY(' + 40 + 'px)'
    })
  }

  // event video opacity
  if (pageYOffset > 10835) {
    const n1 = 10835;
    const n2 = 11049;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 40;
    let sc = ((1 - (1 * (p / 100))) * 0.1) + 1;
    let tr = tr1 - (tr1 * (p / 100));
    let op = op1 * (p / 100);

    if (p > 99) {
      tr = 0;
      op = 1;
      sc = 1;
    }

    if (p < 1) {
      op = 0;
      tr = 40;
      sc = 1.1;
    }

    const video = $('.event__video-block');
    const videoSmall = $('.event__video');

    video.css({
      'opacity': op,
    })

    videoSmall.css({
      'transform': 'scale(' + sc + ')'
    })
  }

  // event video small
  if (pageYOffset > 10930) {
    const n1 = 10930;
    const n2 = 11144;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    let op = op1 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const video = $('.event__small');

    video.css({
      'opacity': op,
    })
  } else {
    const video = $('.event__small');

    video.css({
      'opacity': 0,
    })
  }

  // event video play
  if (pageYOffset > 11049) {
    const n1 = 11049;
    const n2 = 11263;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    let op = op1 * (p / 100);

    if (p > 99) {
      op = 1;
    }

    if (p < 1) {
      op = 0;
    }

    const play = $('.event__video-block .play');

    play.css({
      'opacity': op,
    })
  } else {
    const play = $('.event__video-block .play');

    play.css({
      'opacity': 0,
    })
  }

  // event hidden
  if (pageYOffset > 11751) {
    const n1 = 11751;
    const n2 = 11971;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 220;
    let tr = -tr1 * (p / 100);
    let op = op1 - (op1 * (p / 100));

    if (p > 99) {
      tr = -220;
      op = 0;
    }

    if (p < 1) {
      op = 1;
      tr = 0;
    }

    const block = $('.event');

    block.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else if (pageYOffset > 10502 && pageYOffset) {
    const block = $('.event');

    block.css({
      'opacity': 1,
      'transform': 'translateY(' + 0 + 'px)'
    })
  }

  // blog title
  if (pageYOffset > 12152) {
    const n1 = 12152;
    const n2 = 12356;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 50;
    let tr = tr1 - tr1 * (p / 100);
    let op = op1 * (p / 100);

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
      op = 0;
      tr = 50;
    }

    const block = $('.blog');
    const title = $('.blog__title');

    block.css({
      'opacity': 1,
      'z-index': 59
    })

    title.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const block = $('.blog');

    block.css({
      'opacity': 0,
      'z-index': 50
    })
  }

  // blog items
  if (pageYOffset > 12356) {
    const items = $('.blog__list .list__row .item');
    const length = items.length;
    let count = 0;
    items.each(function () {
      const index = count * 120;
      const n1 = 12356 + index;
      const n2 = 12563 + index;
      const n = pageYOffset - n1;
      const p = n / (n2 - n1) * 100;
      const op1 = 0;
      const op2 = 1;
      const tr2 = 30;
      let tr = tr2 - (tr2 * (p / 100));
      let op = op2 * (p / 100);

      if (p > 99) {
        op = 1;
        tr = 0;
      }

      if (p < 1) {
        op = 0;
        tr = 30;
      }

      $(this).css({
        'opacity': op,
        'transform': 'translateY(' + tr + 'px)'
      })

      count++;
    });
  } else {
    const items = $('.blog__list .list__row .item');

    items.css({
      'opacity': 0,
      'transform': 'translateY(' + 30 + 'px)'
    });
  }

  // blog hidden
  if (pageYOffset > 13572) {
    const n1 = 13572;
    const n2 = 13770;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    let op = op1 - (op1 * (p / 100));

    if (p > 99) {
      op = 0;
    }

    if (p < 1) {
      op = 1;
    }

    const block = $('.blog');

    block.css({
      'opacity': op
    })
  } else if (pageYOffset > 12152 && pageYOffset) {
    const block = $('.blog');

    block.css({
      'opacity': 1
    })
  }

  // footer items
  if (pageYOffset > 13888) {
    const items = $('.home-about__big-block');
    const length = items.length;
    let count = 0;
    const block = $('.home-about');
    block.css({
      'opacity': 1,
      'z-index': 60
    })
    items.each(function () {
      const index = count * 189;
      const n1 = 13888 + index;
      const n2 = 14077 + index;
      const n = pageYOffset - n1;
      const p = n / (n2 - n1) * 100;
      const op1 = 0;
      const op2 = 1;
      const tr2 = 50;
      let tr = tr2 - (tr2 * (p / 100));
      let op = op2 * (p / 100);

      if (p > 99) {
        op = 1;
        tr = 0;
      }

      if (p < 1) {
        op = 0;
        tr = 50;
      }

      $(this).css({
        'opacity': op,
        'transform': 'translateY(' + tr + 'px)'
      })

      count++;
    });
  } else {
    const items = $('.home-about__big-block');
    const block = $('.home-about');
    block.css({
      'opacity': 0,
      'z-index': 50
    })

    items.css({
      'opacity': 0,
      'transform': 'translateY(' + 50 + 'px)'
    });
  }

  // footer line
  if (pageYOffset > 14175) {
    const n1 = 14175;
    const n2 = 14364;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    let mw = p;

    if (p > 99) {
      mw = 100;
    }

    if (p < 1) {
      mw = 0;
    }

    const line = $('.home-about__container .top-line');

    line.css({
      'max-width': mw + '%'
    })

  } else {
    const line = $('.home-about__container .top-line');

    line.css({
      'max-width': 0 + '%'
    })
  }

  // footer items 2
  if (pageYOffset > 14175) {
    const items = $('.home-about .coll__center');
    const length = items.length;
    let count = 0;

    items.each(function () {
      const index = count * 189;
      const n1 = 14175 + index;
      const n2 = 14364 + index;
      const n = pageYOffset - n1;
      const p = n / (n2 - n1) * 100;
      const op1 = 0;
      const op2 = 1;
      const tr2 = 15;
      let tr = tr2 - (tr2 * (p / 100));
      let op = op2 * (p / 100);

      if (p > 99) {
        op = 1;
        tr = 0;
      }

      if (p < 1) {
        op = 0;
        tr = 15;
      }

      $(this).css({
        'opacity': op,
        'transform': 'translateY(' + tr + 'px)'
      })

      count++;
    });
  } else {
    const items = $('.home-about .coll__center');

    items.css({
      'opacity': 0,
      'transform': 'translateY(' + 15 + 'px)'
    });
  }

  // footer line 2
  if (pageYOffset > 14364) {
    const n1 = 14364;
    const n2 = 14553;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    let mw = p;

    if (p > 99) {
      mw = 100;
    }

    if (p < 1) {
      mw = 0;
    }

    const line = $('.home-about__container .bot-line');

    line.css({
      'max-width': mw + '%'
    })

  } else {
    const line = $('.home-about__container .bot-line');

    line.css({
      'max-width': 0 + '%'
    })
  }

  // footer bot
  if (pageYOffset > 14455) {
    const n1 = 14455;
    const n2 = 14644;
    const n = pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    const tr1 = 30;
    let tr = tr1 - tr1 * (p / 100);
    let op = op1 * (p / 100);

    if (p > 99) {
      tr = 0;
      op = 1;
    }

    if (p < 1) {
      op = 0;
      tr = 30;
    }

    const coop = $('.elba-coop');

    coop.css({
      'opacity': op,
      'transform': 'translateY(' + tr + 'px)'
    })
  } else {
    const coop = $('.elba-coop');

    coop.css({
      'opacity': 0,
      'transform': 'translateY(' + 30 + 'px)'
    })
  }
}


const bodyHeight = () => {
  if ($('.fullPage__box').length < 1) {
    return
  }

  const height = $(window).height() + 14700;

  $('body').css('height', height);
}

const hiddenAll = (pages) => {
  pages.css({
    'opacity': '0',
    'z-index': '50'
  })
}

export {scrollAnim, bodyHeight}