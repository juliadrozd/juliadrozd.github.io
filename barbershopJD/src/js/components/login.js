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