$('select').each(function () {
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    const rel = $(this).attr('rel');
    $list.hide();
    if ($this.hasClass('js-template')) {
      $('.js-template option').each(function () {
        if (rel === $(this).attr('value')) {
          const name = $(this).attr('data-name');
          const lastName = $(this).attr('data-last-name');
          const company = $(this).attr('data-company');
          const address = $(this).attr('data-address');
          const zip = $(this).attr('data-zip');
          const country = $(this).attr('data-country');
          const city = $(this).attr('data-city');
          const phone = $(this).attr('data-phone');
          $('#js-template-name').val(name)
          $('#js-template-last-name').val(lastName)
          $('#js-template-company').val(company)
          $('#js-template-address').val(address)
          $('#js-template-zip').val(zip)
          $('#js-template-city').val(city)
          $('#js-template-phone').val(phone)
          $('.js-template-country').next('.select-styled').html(country)
        }
      })
    }
    if ($this.hasClass('js-template-billing')) {
      $('.js-template-billing option').each(function () {
        if (rel === $(this).attr('value')) {
          const name = $(this).attr('data-name');
          const lastName = $(this).attr('data-last-name');
          const company = $(this).attr('data-company');
          const address = $(this).attr('data-address');
          const zip = $(this).attr('data-zip');
          const country = $(this).attr('data-country');
          const city = $(this).attr('data-city');
          const phone = $(this).attr('data-phone');
          $('#js-billing-name').val(name)
          $('#js-billing-last-name').val(lastName)
          $('#js-billing-company').val(company)
          $('#js-billing-address').val(address)
          $('#js-billing-zip').val(zip)
          $('#js-billing-city').val(city)
          $('#js-billing-phone').val(phone)
          $('.js-billing-country').next('.select-styled').html(country)
        }
      })
    }
    if ($this.hasClass('js-template-payment')) {
      $('.js-template-payment option').each(function () {
        if (rel === $(this).attr('value')) {
          const number = $(this).attr('data-number');
          const method = $(this).attr('data-method');
          const month = $(this).attr('data-until-m');
          const year = $(this).attr('data-until-y');
          const cardholder = $(this).attr('data-cardholder');
          const cvv = $(this).attr('data-cvv');
          $('.js-tamplate-method button').each(function () {
            $(this).removeClass('active');
            if ($(this).attr('data-type') === method) {
              $(this).addClass('active');
            }
          })
          $('#js-payment-number').val(number)
          $('#js-payment-cardholder').val(cardholder)
          $('#js-payment-cvv').val(cvv)
          $('.js-payment-month').next('.select-styled').html(month)
          $('.js-payment-year').next('.select-styled').html(year)
        }
      })
    }
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});