(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

  new Swiper('.swiper-container', {
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // TODO Rating init
  var stars = document.querySelectorAll(".stars");
  for (var i = 0; i < stars.length; i++) {
    var star = parseInt(stars[i].getAttribute('data-stars'));
    raterJs({
      max: 5,
      starSize: 30,
      rating: star,
      readOnly: true,
      element: stars[i]
    });
  }

  // TODO Select-color manual
  $('.select-color__main').on('click', function () {
    $(this).toggleClass('select-active').next().slideToggle(300)
  });

  $('.sel li a').on('click', function (event) {
    event.preventDefault();
    let data = $(this).clone();
    $(this).parent().parent().prev().find('button').remove();
    $(this).parent().parent().prev().children().first().html(data);
    $(this).parent().parent().find('.sel-active').removeClass('sel-active');
    $(this).addClass('sel-active');
  })

  // TODO Select global init
  $('.select-gl__value').on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('select__active')) {
      $(this).toggleClass('select__active').next().fadeToggle(100);
    } else {
      $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
      $(this).toggleClass('select__active').next().fadeToggle(100);
    }
  });

  $('.select-gl__item').on('click', function () {
    $(this).parents('.select-gl').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parents('.select-gl').find('.select-gl__value span').text($(this).text());
  });

   // TODO Wrapper click close select
  $('.wrapper').on('click', function () {
    $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
  });

  $('.select-gl__this').on('click', function (event) {
    event.stopPropagation();
  });

  // TODO Tabs
  function tabsGlobal(on, target, tabsWrap, tabActive, boxWrap, boxItem, fade = 300) {
    $(target).on(on, function (event) {
      event.preventDefault();
      if ($(this).hasClass(tabActive)) {
        return false
      }
      $(tabsWrap).find('.' + tabActive).removeClass(tabActive);
      $(this).addClass(tabActive);
      $(boxItem).hide();
      $(boxWrap).find('.' + $(this).attr('name')).stop(true).fadeIn(fade);
    });
  }
  // TODO Tabs init
  tabsGlobal('click', '.menu_btn', '.nav__buttons', 'tab--active', '.nav__clothes', '.nav__box');

  tabsGlobal('click', '.man_btn', '.man-complects_btn', 'tab--active', '.man-complects--wrap', '.man-complects--wrap__box');


  // TODO Counter
  $('.counter__plus').on('click', function (event) {
    event.preventDefault();
    let num = parseInt($(this).prev().val());
    num++;
    if (num > 99999) {
      num = 99999;
    } else {
      $(this).next().val(num);
    }
    $(this).prev().val(num);
    $(this).parents('.counter').find('.counter__minus').removeClass('counter__disabled');
  });
  $('.counter__minus').on('click', function (event) {
    event.preventDefault();
    let num = parseInt($(this).next().val());
    num--;
    if (num !== 0) {
      $(this).next().val(num);
    } else {
      num = 1;
    }
    if (num == 1) {
      $(this).addClass('counter__disabled');
    }
  });
  $('.counter input').on('keyup', function (event) {
    let num = $(this).val();
    if (parseInt($(this).val()) > 9999) {
      $(this).removeAttr('type');
    } else {
      $(this).attr('type', 'number');
    }
    if (parseInt($(this).val()) <= 0) {
      $(this).val(num.substr(1))
    }
    if (event.keyCode === 69 || event.keyCode === 187 || event.keyCode === 107 || event.keyCode === 109 || event.keyCode === 189 || event.keyCode === 190 || event.keyCode === 188 || event.keyCode === 110) {
      $(this).val(parseInt(num))
    }
  }).on('focusout', function () {
    if ($(this).val() === '') {
      $(this).val(1)
    }
  });

})(jQuery);

