// accordion

function accordionSection() {
    let article = document.querySelectorAll('.accordion__item');
    let item = document.querySelectorAll('.accordion__descr');

    for (var i = 0; i < article.length; i++) {
        for (var j = 0; j < item.length; j++) {
            item[0].classList.remove('hide');
        }

        article[i].addEventListener('click', function() {
            let content = this.querySelector('.accordion__descr');
            content.classList.remove('hide');

            for (var j = 0; j < item.length; j++) {
                if (item[j] !== content) {
                    item[j].classList.add('hide');
                }
            }
        });
    }


    // accordion with jQuery


    //$('.accordion__item').first()
    //    .find('.accordion__title--btn').addClass('active');
    // $('.accordion__item').not(':first-child')
    //     .find('p').hide();


    // $('.accordion__title--btn').on('click', function() {
    //     let isActive = $(this).hasClass('active');
    //     let content = $('.accordion__item > p');

    //     if (!isActive) {
    //         $('.accordion__title--btn').removeClass('active');
    //         content.slideUp();
    //     }

    //     $(this).toggleClass('active')
    //         .siblings('p').slideToggle();
    // });
}
accordionSection();