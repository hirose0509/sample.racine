$(function () {

    // scroll-up
    if (window.matchMedia("(max-width: 480px)").matches) {
        // 480px以下
        function scroll_effect() {
            var element = document.getElementsByClassName('scroll-up');
            if (!element) return;

            var scrollY = window.pageYOffset;
            var windowH = window.innerHeight;

            var showTiming = 150;
            for (var i = 0; i < element.length; i++) {
                var elemClientRect = element[i].getBoundingClientRect();
                var elemY = scrollY + elemClientRect.top;
                if (scrollY > elemY - windowH + showTiming) {
                    element[i].classList.add('is-show');
                }
            }
        }
        window.addEventListener('scroll', scroll_effect);
    } else {
        // 480px以上
        function scroll_effect() {
            var element = document.getElementsByClassName('scroll-up');
            if (!element) return;

            var scrollY = window.pageYOffset;
            var windowH = window.innerHeight;

            var showTiming = 180;
            for (var i = 0; i < element.length; i++) {
                var elemClientRect = element[i].getBoundingClientRect();
                var elemY = scrollY + elemClientRect.top;
                if (scrollY > elemY - windowH + showTiming) {
                    element[i].classList.add('is-show');
                }
            }
        }
        window.addEventListener('scroll', scroll_effect);
    }

    // g_nav_menu
    $(".open_btn").click(function () {
        $(this).toggleClass('active');
        $("#g_nav").toggleClass('panelactive');
        $(".h_right").toggleClass('panelactive');
        $("#contact").toggleClass('none');
    });

    $("#g_nav a").click(function () {
        $(".open_btn").removeClass('active');
        $("#g_nav").removeClass('panelactive');
        $(".h_right").removeClass('panelactive');
        $("#contact").removeClass('none');
    });

    // toTop
    $("#totop img").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // modaal
    $('.modal').modaal({
        before_open: function () {
            $('html').css('overflow-y', 'hidden');
        },
        after_close: function () {
            $('html').css('overflow-y', 'scroll');
        }
    });

    $('.modal').modaal({
        type: 'image',
        fullscreen: 'true',
        overlay_close: 'true',
        background: '#000',
    });

});