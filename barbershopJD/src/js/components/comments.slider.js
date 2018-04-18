// Slider
function Slider() {
    const sliderContainer = document.querySelector('.testimonials__slider-track');
    const btnNext = document.querySelector('#js-next--btn');
    const btnPrev = document.querySelector('#js-prev--btn');
    const dortsContainer = document.querySelector('.testimonials__slider-dots-list');
    let endCount = 0;
    let currentCount = 1;
    let position = 0;

    btnNext.addEventListener('click', ev => {
        let dotsItem = dortsContainer.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let classes = dotsItem[i].classList.toggle('testimonials__slider-dots-item--active');
        }
        nextItem();
        prevItem();
    });

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

    btnPrev.addEventListener('click', ev => {

        console.log('prev');
        prevItem();
        nextItem();

    });

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

}
Slider();