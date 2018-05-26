$(document).ready(function() {
    /**
     * 
     * Navigation
     * 
     */

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();

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
    /*
     *
     * Sort
     */
    $(function() {
        var $filters = $('.projects__btn-list [data-category]'),
            $boxes = $('.projects__content [data-filter]');

        $filters.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);

            $filters.removeClass('active');
            $filters.removeClass('projects__btn--active');
            $this.addClass('active');
            $this.addClass('projects__btn--active');

            var $filterProjects = $this.attr('data-category');

            if ($filterProjects == 'all') {
                $boxes.removeClass('is-animated')
                    .fadeOut().promise().done(function() {
                        $boxes.addClass('is-animated').fadeIn();
                    });
            } else {
                $boxes.removeClass('is-animated')
                    .fadeOut().promise().done(function() {
                        $boxes.filter('[data-filter = "' + $filterProjects + '"]')
                            .addClass('is-animated').fadeIn();
                    });
            }
        });
    });
    /*
     *
     * search
     *
     */
    function searchAndHighlight(searchTerm, selector, highlightClass, removePreviousHighlights) {
        if (searchTerm) {
            const clear = $('#clear-button');
            if (!clear.is(':visible')) {
                clear.show();
                clear.on('click', function() {
                    $('#search-term').val('');
                    $('.highlighted').removeClass('highlighted');
                    clear.hide();
                });
            }
            var selector = selector || "body", //use body as selector if none provided
                searchTermRegEx = new RegExp("(" + searchTerm + ")", "gi"),
                matches = 0,
                helper = {};
            helper.doHighlight = function(node, searchTerm) {
                if (node.nodeType === 3) {
                    if (node.nodeValue.match(searchTermRegEx)) {
                        matches++;
                        var tempNode = document.createElement('span');
                        tempNode.innerHTML = node.nodeValue.replace(searchTermRegEx, "<span class='" + highlightClass + "'>$1</span>");
                        node.parentNode.replaceChild(tempNode, node);
                    }
                } else if (node.nodeType === 1 && node.childNodes && !/(style|script)/i.test(node.tagName)) {
                    $.each(node.childNodes, function(i, v) {
                        helper.doHighlight(node.childNodes[i], searchTerm);
                    });
                }
            };
            if (removePreviousHighlights) {
                $('.' + highlightClass).each(function(i, v) {
                    var $parent = $(this).parent();
                    $(this).contents().unwrap();
                    $parent.get(0).normalize();
                });
            }

            $.each($(selector).children(), function(index, val) {
                helper.doHighlight(this, searchTerm);
            });
            return matches;
        }
        return false;
    }

    $(document).ready(function() {

        $('#search-button').on("click", function(e) {
            e.preventDefault();
            if (!searchAndHighlight($('#search-term').val(), 'body', 'highlighted', true)) {
                alert("No results found");
            }
        });
        $('.nav__search--wrap').on('submit', function(e) {
            e.preventDefault();
            if (!searchAndHighlight($('#search-term').val(), 'body', 'highlighted', true)) {
                alert("No results found");
            }
        });
    });

    /*
     *
     * 
     * slider
     * 
     */
    $(function() {
        $('.hero__gallery--next--btn').on('click', function() {
            $('.hero__gallery--prev--btn').fadeIn(300);
            $('.hero__gallery--track .hero__gallery--img').first().appendTo($('.hero__gallery--track'));
        });
        $('.hero__gallery--prev--btn').on('click', function() {
            $('.hero__gallery--track .hero__gallery--img').last().prependTo($('.hero__gallery--track'));
        });
    });
    /*
     *
     * Invite
     * 
     */
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function completeInviteForm() {
        setTimeout(function() {
            $("#inviteform").submit(function() {
                $.ajax({
                    type: 'POST',
                    url: 'save.php', // mysql
                    data: 'email=' + $("#email").val(),
                    success: function() {
                        $("#email").val('Thank you! We will message you');
                    }
                });
            });
        }, 1100);
    };

    $(function() {
        $("#sendbtn").on("click", function(e) {
            e.preventDefault();
            var emailval = $("#email").val();


            if (!isEmail(emailval)) {
                $("#email").attr('placeholder', 'Ops! This email is invalid...');
            }

            if (isEmail(emailval)) {
                setTimeout(function() {
                    $("#email").val('Processing...');
                }, 1000);
                (completeInviteForm(), 900);
            }
        });
    });

})