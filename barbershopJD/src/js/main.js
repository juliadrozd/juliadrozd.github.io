window.addEventListener('DOMContentLoaded', init);

// import nunjucks from 'nunjucks'
// nunjucks.configure('js/templates', {
//     autoescape: true,
// });
import responsiveNav from './components/menu.js';
import showLogin from './components/showLogin.js';
import login from './components/login.js';
import addComment from './components/testimonials/comments';
import formApplication from './components/form.application.js';

//import Slider from './testimonials/components/comments.slider.js';



function init() {

    responsiveNav();
    showLogin();
    login();
    addComment();
    formApplication();

    // Slider();
}