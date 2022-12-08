
$(window).on('load', function () {
  if (sessionStorage.getItem('access') == 'true') {
    $('#wrap').css('opacity', '1');
    $("#splash").addClass('none');
    $("#splash_logo").addClass('none');
    $('body').addClass('appear');
    $('.sprashbg').remove();
  } else {
    // 初回アクセス時
    sessionStorage.setItem('access', 'true');
    //logo表示
    $("#splash_logo").delay(3000).fadeOut('slow');
    $("#splash").delay(3200).fadeOut('slow', function () {
      $('body').addClass('appear');
    });
  }
});

$(function () {
  $('.slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      switch (currentSlide) {
        case 0:
          // 1枚目
          $(this).slick("slickSetOption", "autoplaySpeed", 3000);
          break;
        default:
          // 2枚目以降
          $(this).slick("slickSetOption", "autoplaySpeed", 3000);
          break;
      }
    });

  //スマホ用(スライダーをタッチしても止めない)
  $('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
  });
});
