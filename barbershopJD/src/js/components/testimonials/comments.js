import nunjucks from 'nunjucks'
nunjucks.configure('js/templates', {
    autoescape: true,
});

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

    // Click on the button and show the form for new comment
    btnPutComments.addEventListener('click', getNewComment);

    function getNewComment() {
        // Reference comments collection
        let commentsRef = firebase.database().ref('comments');

        // Listen for form submit
        document.getElementById('js-testimonials__form').addEventListener('submit', submitForm);

        // Submit form function
        function submitForm(e) {
            e.preventDefault();

            // Get values
            const photoCom = getInputVal('js-testimonials__avatar');
            const nameCom = getInputVal('js-testimonials__name');
            const emailCom = getInputVal('js-testimonials__email');
            const commentsCom = getInputVal('js-testimonials__comments');

            // Save message
            saveComment(photoCom, nameCom, emailCom, commentsCom);
            // Put comment in container
            putComments(photoCom, nameCom, emailCom, commentsCom);
            // Clear form after request
            document.getElementById('js-testimonials__form').reset();
        }

        // Function to get form values
        function getInputVal(id) {
            return document.getElementById(id).value;
        }

        // Save message to firebase
        function saveComment(photoCom, nameCom, emailCom, commentsCom) {
            let newMessageRef = commentsRef.push();
            newMessageRef.set({ photoCom, nameCom, emailCom, commentsCom });
            console.log();
        }


        // Create comments item
        function putComments(photoCom, nameCom, emailCom, commentsCom) {
            let nunjucks = require('nunjucks');
            nunjucks.configure('js/templates', {
                autoescape: true,
            });
            let container = document.querySelector('.testimonials__slider-track');
            const content = nunjucks.render('tesimonialsItem.html', { photoCom, nameCom, emailCom, commentsCom });
            container.innerHTML = content;
            container.appendChild(content);

        }

        // Close form
        setTimeout(() => {
            closeComment();
        }, 1000);

    }

}
if (document.querySelector('.testimonials__form--wrap') !== null) addComment();