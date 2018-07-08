$(document).ready(function() {
    /**
     * 
     * Navigation
     * 
     */

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('#main--nav').removeClass('show--main-nav');

        let $anchor = $(this).attr('href');
        let $offsetTop = $($anchor).offset().top;

        $('body, html').animate({
            scrollTop: $offsetTop,
        }, 700)
    });
    /*
     * 
     * toTop
     * 
     */
    $(function() {
        const btt = $('.back-to-top');

        btt.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
        $(window).on('scroll', function() {
            let self = $(this),
                height = self.height(),
                top = self.scrollTop();

            if (top > height) {
                if (!btt.is(':visible')) {
                    btt.show();
                }
            } else {
                btt.hide();
            }
        });
    });

    /*
     * 
     * Menu
     * 
     */
    (function showNav() {
        let navBtn = $('#nav--btn');
        let mainNav = $('#main--nav');
        let overlay = $('.overlay');

        navBtn.on('click', function() {
            mainNav.addClass('show--main-nav');
            overlay.addClass('overlay--active');
            $('body').addClass('body-fixed');

            $(this).attr('disabled', true);

        });
        overlay.on('click', function() {
            mainNav.removeClass('show--main-nav');
            overlay.removeClass('overlay--active');
            $('body').removeClass('body-fixed');

            navBtn.removeAttr('disabled');
        })

    })();
    /*
     *
     * 
     * slider
     * 
     */
    $(function() {
        setInterval(function(event){
            $('.hero__gallery--track .hero__gallery--img').first().appendTo($('.hero__gallery--track'));
        }, 5000);

        $('.hero__gallery--next--btn').on('click', function() {
            $('.hero__gallery--track .hero__gallery--img').first().appendTo($('.hero__gallery--track'));
        });
        $('.hero__gallery--prev--btn').on('click', function() {
            $('.hero__gallery--track .hero__gallery--img').last().prependTo($('.hero__gallery--track'));
        });
    });

})