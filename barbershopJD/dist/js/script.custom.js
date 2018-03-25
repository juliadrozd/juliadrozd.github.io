window.addEventListener('DOMContentLoaded', init);


function init() {

    // login form
    function login() {
        let btnShowLogin = document.querySelector('#js-show-login-btn');
        let overlay = document.querySelector('.overlay');
        let loginForm = document.querySelector('.login__form--wrap');
        let btnLogin = document.querySelector('#js-login-btn');
        let btnSingin = document.querySelector('#js-singin-btn');

        btnShowLogin.addEventListener('click', () => {
            loginForm.classList.add('login__form--wrap--show');
            overlay.classList.add('overlay--active');
            document.body.classList.add('body--fixed');
            overlay.addEventListener('click', closeLogin);
        });

        function closeLogin() {
            loginForm.classList.remove('login__form--wrap--show');
            overlay.removeEventListener('click', closeLogin);
            overlay.classList.remove('overlay--active')
            document.body.classList.remove('body--fixed');
        }


    }
    login();

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

    // Add comments on testimonials

    function addComment() {
        let btnAdd = document.querySelector('#js-testimonials-btn');
        let commentsForm = document.querySelector('.testimonials__form--wrap');
        let overlay = document.querySelector('.overlay');
        let btnPutComments = document.querySelector('#js-testemonials-add-btn');

        // Click on the button
        btnAdd.addEventListener('click', () => {
            commentsForm.classList.add('testimonials__form--wrap--show');
            setTimeout(() => overlay.classList.add('overlay--active'), 250);
            document.body.classList.add('body--fixed');
            overlay.addEventListener('click', closeComment);
        });

        // Close modal window
        function closeComment() {
            commentsForm.classList.remove('testimonials__form--wrap--show');
            overlay.classList.remove('overlay--active');
            document.body.classList.remove('body--fixed');
        }

        btnPutComments.addEventListener('click', closeComment);
    }
    addComment();

    // Slider
    function slider(wrapperID, settings) {
        let btnPrev = document.querySelector('#js-prev--btn');
        let btnNext = document.querySelector('#js-next--btn');
        let currentItem = document.querySelectorAll('.testimonials__slider-item');

        let endCount = 0;
        let currentCount = 1;

        btnNext.addEventListener('click', () => {


        });
    }
    slider();

}