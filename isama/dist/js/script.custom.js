$(function() {
    /**
     * 
     * Navigation anchors
     * 
     */

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        let $anchor = $(this).attr('href');
        let $offsetTop = $($anchor).offset().top;

        $('body, html').animate({
            scrollTop: $offsetTop,
        }, 500)
    });
    /*
     * 
     * toTop
     * 
     */
    $(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 800);
        });

    });



    /*
     * 
     * Menu
     * 
     */
    (function responsiveNav() {
        let btn = $('#menu-btn');
        let nav = $('nav');
        let overlay = $('.overlay');

        btn.on('click', function() {
            nav.addClass('nav--active');
            overlay.addClass('overlay--active');
            $('body').addClass('body-fixed');

            $(this).attr('disabled', true);


        });

        overlay.on('click', function() {
            nav.removeClass('nav--active');
            overlay.removeClass('overlay--active');
            $('body').removeClass('body-fixed');

            btn.removeAttr('disabled');
        })
    })();
})