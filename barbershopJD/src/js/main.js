window.addEventListener('DOMContentLoaded', init);


import responsiveNav from './components/menu.js';
import showLogin from './components/showLogin.js';
import login from './components/login.js';
import addComment from './components/comments.js';
import formApplication from './components/form.application.js';
import getCommentsFromDB from './components/getCommentsFromDB.js';
import Slider from './components/comments.slider.js';




function init() {
    responsiveNav();
    showLogin();
    login();
    formApplication();
    addComment();
    getCommentsFromDB();
    Slider();
}