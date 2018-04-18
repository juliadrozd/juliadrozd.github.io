// responsive navigation
function responsiveNav() {
    let btn = document.querySelector('#menu-btn');
    let nav = document.querySelector('nav');
    let overlay = document.querySelector('.overlay');


    btn.addEventListener('click', () => {
        nav.classList.add('nav--active');
        setTimeout(() => overlay.classList.add('overlay--active'), 250);
        overlay.addEventListener('click', closeNav);

        this.attr('disabled', true);
    });

    function closeNav() {
        nav.classList.remove('nav--active');
        overlay.classList.remove('overlay--active');
        btn.classList.remove('disabled');
    }
}

responsiveNav();