window.addEventListener('DOMContentLoaded', init);

function init() {

    const firstSlider = Slider('#first-slider');

    const tabsHover = tabs('.tabs');

    const tableMultiply = tableMultiply('#multiply');

    const modalWindow = modal('#js-modal-btn');

    const accordion = accordionSection('.accordion');

    const buttonsAnimation = buttonAnimate('.button-animate');

    const ballAnimation = ballAnimate('#field');


}

// Menu
function offCanvas() {
    let nav = document.querySelector('#nav');
    let btn = document.querySelector('#js-nav-btn');
    let overlay = document.querySelector('.overlay');


    btn.addEventListener('click', () => {
        overlay.classList.add('overlay--active');
        setTimeout(() => nav.classList.add('nav--active'), 150);
        overlay.addEventListener('click', closeNav);

    });

    function closeNav() {
        nav.classList.remove('nav--active');
        setTimeout(() => overlay.classList.remove('overlay--active'), 250);
        overlay.removeEventListener('click', closeNav);

    }
}
offCanvas();



// Gallery by click with images on server
function gallery() {
    var leftArrow = document.getElementById('prev--btn');
    rightArrow = document.getElementById('next--btn');
    var initImgNumber = 1;
    maxImgNumber = 4;

    leftArrow.addEventListener('click', prevImg);
    rightArrow.addEventListener('click', nextImg);

    function prevImg() {
        var image = document.getElementById('gallery--img');
        initImgNumber--;
        if (initImgNumber == 0) { initImgNumber = maxImgNumber };

        setTimeout(() => image.setAttribute('src', 'img/' + initImgNumber + '.jpg'), 250);


    };

    function nextImg() {
        var image = document.getElementById('gallery--img');
        initImgNumber++;
        if (initImgNumber > maxImgNumber) { initImgNumber = 1 };

        setTimeout(() => image.setAttribute('src', 'img/' + initImgNumber + '.jpg'), 250);
    };
}
gallery();