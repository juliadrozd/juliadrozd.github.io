// accordion

function accordionSection() {

   $('.accordion__item').first()
        .find('.accordion__title--btn').addClass('active');

    $('.accordion__item').not(':first-child')
        .find('p').hide();

    $('.accordion__title--btn').on('click', function() {
        let isActive = $(this).hasClass('active');
        let content = $('.accordion__item > p');

        if (!isActive) {
            $('.accordion__title--btn').removeClass('active');
            content.slideUp();
        }

        $(this).toggleClass('active')
            .siblings('p').slideToggle();
    });
}
accordionSection();