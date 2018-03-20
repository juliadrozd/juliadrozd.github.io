function Slider(wrapperID, settings) {
    let params = {
        counter: false,
        infinite: false,
        slideToShow: 1,
    };

    // check by keys
    if (settings !== undefined && typeof settings === 'object') {
        let settingsKey = Object.keys(settings);

        for (let i = 0; i < settingsKey.length; i++) {
            for (let key in params) {
                if (key === settingsKey[i]) params[key] = settings[settingsKey[i]];
            }
        }
    }

    // main variables
    const endCount = $(`${wrapperID} .slider__item`).length;
    const elWidth = $(`${wrapperID} .slider__item`).innerWidth();

    const $slider = $('#first-slider');
    const $sliderContainer = $slider.find('.slider__container');


    let currentCount = 1;
    let position = 0;

    //condition
    $(`${wrapperID} .prev, ${wrapperID} .next`).on('click', function() {
        switchSlide($(this));

        if (params.counter) updateCounter(currentCount);
        if (params.infinite) initAutoplay(currentCount);
    });

    // swith the slide by prev&next buttons
    function switchSlide(selector) {
        let btn = selector.hasClass('next') ? 'next' : 'prev';

        if (btn === 'next') {

            if (currentCount < endCount) {
                currentCount++;
                position += elWidth;

            }
        } else {

            if (currentCount > 1) {
                currentCount--;
                position -= elWidth;
            }
        }


        $(`${wrapperID} .slider__container`).css({
            transform: `translateX(-${position}px)`,
        });

    }

    // autoplay with upload page
    // stop by mouseenter on gallery and continue with mouseleave from the gallery 

    if (params.infinite) {

        function initAutoplay() {
            let animationSpeed = 1000;
            let pause = 3000;
            let interval;

            function startSlider() {
                interval = setInterval(function() {
                    $sliderContainer.animate({ 'margin-left': '-=' + elWidth },
                        animationSpeed,
                        function() {
                            currentCount++;
                            if (currentCount === endCount) {
                                currentCount = 1;
                                setTimeout(function() {
                                    $('.slider__container>li:last-child').prependTo($sliderContainer);
                                    $sliderContainer.css('margin-left', 0);
                                }, 1000);

                            }
                        });
                }, pause);

            }

            startSlider();

            function stopSlider() {
                clearInterval(interval);
            }

            $slider.on('mouseleave', startSlider).on('mouseenter', stopSlider);

        }

        initAutoplay();

    }


    // count slides like numbers

    if (params.counter) {
        function initCounter() {
            const counterWrapper = $('<div class="counter-wrapper">');
            let currentCountContainer = $('<span class="counter__current counter__item">');
            let endCountContainer = $('<span class="counter__end counter__item">');

            currentCountContainer.text(currentCount);
            endCountContainer.text(endCount);

            counterWrapper.appendTo($(wrapperID));
            currentCountContainer.appendTo(counterWrapper);
            endCountContainer.appendTo(counterWrapper);
        }

        function updateCounter(currentCount) {
            $('.counter__current').text(currentCount);
        }
        initCounter();
    }
}