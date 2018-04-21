function featuresSlider() {
    const featuresContainer = document.querySelector('.features__list');
    const dotsFeatures = document.querySelector('.features__slider-dots-list-mobile');
    let endCount = 0;
    let currentCount = 1;
    let position = 0;

    dotsFeatures.lastElementChild.addEventListener('click', ev => {
        nextDots()
        nextItem();
        prevItem();
    });

    function nextItem() {
        endCount = featuresContainer.children.length;
        let sliderItemLast = featuresContainer.lastElementChild;
        let sliderItemFirst = featuresContainer.firstElementChild;
        if (currentCount < endCount) {
            currentCount++;
            position = 0;

            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = featuresContainer.appendChild(cloneItem);

            featuresContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = featuresContainer.firstElementChild;
        }
    }

    function nextDots() {
        let dotsItem = dotsFeatures.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let dotsCurrent = dotsItem[i].classList.remove('features__slider-dots-item--active');
            dotsFeatures.lastElementChild.classList.add('features__slider-dots-item--active');
        }
    }

    dotsFeatures.firstElementChild.addEventListener('click', ev => {
        prevDots()
        nextItem();
        prevItem();
    });

    function prevItem() {
        let sliderItemLast = featuresContainer.lastElementChild;
        let sliderItemFirst = featuresContainer.firstElementChild;

        if (currentCount <= endCount) {
            endCount--;
            position = 0;
            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = featuresContainer.appendChild(cloneItem);

            featuresContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = featuresContainer.firstElementChild;
        }
    }

    function prevDots() {
        let dotsItem = dotsFeatures.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let dotsCurrent = dotsItem[i].classList.remove('features__slider-dots-item--active');
            dotsFeatures.firstElementChild.classList.add('features__slider-dots-item--active');
        }
    }

}
if (document.getElementById('features-section') !== null) featuresSlider();