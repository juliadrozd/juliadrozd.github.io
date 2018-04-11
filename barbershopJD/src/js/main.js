window.addEventListener('DOMContentLoaded', init);
import responsiveNav from './components/menu.js';
import login from './components/login.js';
import addComment from './components/comments.js';
import slider from './components/comments.slider.js';
import formApplication from './components/form.application.js';


function init() {
    responsiveNav();
    login();
    addComment();
    slider();
    formApplication();
}