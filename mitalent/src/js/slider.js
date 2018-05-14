// Slider
export default function(comment) {
    const sliderContainer = document.querySelector('.testimonials__slider-track');
    const btnNext = document.querySelector('#js-next--btn');
    const btnPrev = document.querySelector('#js-prev--btn');
    const dotsContainer = document.querySelector('.testimonials__slider-dots-list');
    let endCount = 0;
    let currentCount = 1;
    let position = 0;

    function next() {
        nextDots();
        nextItem();
        prevItem();
    }

    function nextD() {
        nextDots()
        nextItem();
        prevItem();
    }

    function nextItem() {
        endCount = sliderContainer.children.length;
        let sliderItemLast = sliderContainer.lastElementChild;
        let sliderItemFirst = sliderContainer.firstElementChild;
        if (currentCount < endCount) {
            currentCount++;
            position = 0;

            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = sliderContainer.appendChild(cloneItem);

            sliderContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = sliderContainer.firstElementChild;
        }
    }

    function nextDots() {
        let dotsItem = dotsContainer.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let dotsCurrent = dotsItem[i].classList.remove('testimonials__slider-dots-item--active');
            dotsContainer.lastElementChild.classList.add('testimonials__slider-dots-item--active');
        }
    }

    function prev() {
        prevDots();
        prevItem();
        nextItem();
    }

    function prevD() {
        prevDots()
        nextItem();
        prevItem();
    }

    function prevItem() {
        let sliderItemLast = sliderContainer.lastElementChild;
        let sliderItemFirst = sliderContainer.firstElementChild;

        if (currentCount <= endCount) {
            endCount--;
            position = 0;
            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = sliderContainer.appendChild(cloneItem);

            sliderContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = sliderContainer.firstElementChild;
        }
    }

    function prevDots() {
        let dotsItem = dotsContainer.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let dotsCurrent = dotsItem[i].classList.remove('testimonials__slider-dots-item--active');
            dotsContainer.firstElementChild.classList.add('testimonials__slider-dots-item--active');
        }
    }

}