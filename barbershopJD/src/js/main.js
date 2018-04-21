document.addEventListener('DOMContentLoaded', init);


import responsiveNav from './components/menu.js';
import showLogin from './components/showLogin.js';
import login from './components/login.js';
import formApplication from './components/form.application.js';
import getCommentsFromDB from './components/getCommentsFromDB.js';
import slider from './components/comments.slider.js';
import addComment from './components/comments.js';



function init() {
    responsiveNav();
    showLogin();
    login();
    formApplication();
    getCommentsFromDB();
    slider();
    addComment();
}