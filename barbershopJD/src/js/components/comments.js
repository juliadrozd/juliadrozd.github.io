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
    if (document.querySelector('.testimonials__form--wrap') !== null) addComment();