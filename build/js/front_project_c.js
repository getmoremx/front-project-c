(function () {
  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.form-message')
      .removeClass(form.hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      var $form = $(form).serialize(),
        fields = $(form).find('select, input, textarea, button').not('[disabled]'),
        formMessage = $(form).find('.form-message'),
        successMessage = $('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),
        setMessage = function (success) {
          var message = success ? successMessage : errorMessage;
          fields.removeAttr('disabled');
          formMessage.removeClass(success ? 'error' : 'success');
          formMessage.addClass(success ? 'success' : 'error');
          formMessage.html(message);
        };

      fields.attr('disabled', 'disabled');
      formMessage.html('');
      if (!$(form).find('.button-wrapper .loader').length) {
        $(form).find('.button-wrapper').addClass('disabled');
      }
      $.ajax({
        url: $(form).attr('action'),
        method: 'POST',
        data: $form
      })
        .done(function (data) {
          setMessage(parseInt(data) === 1);
          form.reset();
        })
        .fail(function () {
          setMessage(false);
        })
        .always(function () {
          fields.removeAttr('disabled');
          $(form).find('.button-wrapper').removeClass('disabled');
        });
    }
  });
})();
(function () {
  var mobile = window.matchMedia('(max-width: 876px)'); // Change

  function detectTouch(e) {
    if (!$(e.target).is('.site-navbar__menu-trigger') && !$(e.target).is('.site-navbar__menu-container') && !$(e.target).closest('.site-navbar__menu-container').length && $('.site-navbar__menu-container').hasClass('site-navbar__menu-container--show-menu')) {
      e.preventDefault();
      $('.site-navbar__menu-container').removeClass('site-navbar__menu-container--show-menu');
      $('body').removeClass('noscroll');
    }
  }

  function detectClick() {
    if ($('.site-navbar__menu-container').hasClass('site-navbar__menu-container--show-menu')) {
      $('.site-navbar__menu-container').removeClass('site-navbar__menu-container--show-menu');
      $('body').removeClass('noscroll');
    } else {
      $('.site-navbar__menu-container').addClass('site-navbar__menu-container--show-menu');
      $('body').addClass('noscroll');
    }
  }

  if (mobile.matches) {
    $('body')[0].addEventListener('touchstart', detectTouch, {passive: false});
    $('.site-navbar__menu-trigger').click(detectClick);
  } else {
    $('body')[0].removeEventListener('touchstart', detectTouch, {passive: false});
    $('.site-navbar__menu-trigger').off('click');
    $('body').removeClass('noscroll');
  }

  $(window).resize(function () {
    $('body')[0].removeEventListener('touchmove', detectTouch, {passive: false});
    $('.site-navbar__menu-trigger').off('click');
    $('body').removeClass('noscroll');
    $('.site-navbar__menu-container').removeClass('show-menu');

    if (mobile.matches) {
      $('body')[0].addEventListener('touchmove', detectTouch, {passive: false});
      $('.site-navbar__menu-trigger').click(detectClick);
    }
  });
})();
(function () {
  
})();