import nunjucks from './nunjucks.js';

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
        function submitForm(event) {
            event.preventDefault();

            // Get values

            // put a photo
            // cant to add a child in storage

            // let storageRef = firebase.storage();
            // console.log(storageRef);

            // let file = document.querySelector('#js-testimonials__avatar').files[0];
            // const photoCom = (+new Date()) + '-' + file.name;
            // console.log(photoCom);

            // // Create a reference to photoCom
            // var imageRef = storageRef.child(photoCom).put(file);
            // console.log(imageRef);


            // task.then((snapshot) => {
            //     const url = snapshot.downloadURL;
            //     console.log(url);

            //     document.querySelector('#js-testimonials__avatar').src = url;
            //     console.log(document.querySelector('#js-testimonials__avatar'));

            // }).catch((error) => {
            //     console.error(error);
            // });

            const photoCom = getInputVal('js-testimonials__avatar');
            const nameCom = getInputVal('js-testimonials__name');
            const emailCom = getInputVal('js-testimonials__email');
            const commentsCom = getInputVal('js-testimonials__comments');

            // Save message
            saveComment(photoCom, nameCom, emailCom, commentsCom);


            // Function to get form values
            function getInputVal(id) {
                return document.getElementById(id).value;
            }

            // Save message to firebase
            function saveComment(photoCom, nameCom, emailCom, commentsCom) {
                let newMessageRef = commentsRef.push();
                newMessageRef.set({ photoCom, nameCom, emailCom, commentsCom });
            }


            // Create comments item
            function putComments(photoCom, nameCom, emailCom, commentsCom) {
                let container = document.querySelector('.testimonials__slider-track');
                return fetch('https://barbershopjd-2cab8.firebaseio.com/comments.json')
                    .then(r => r.json())
                    .then(item => {
                        let commentItem = document.createElement('figure');
                        commentItem.className = 'testimonials__slider-item';
                        let content = ({ photoCom, nameCom, emailCom, commentsCom });
                        content = nunjucks.render('testimonialsItem.njk', {
                            photoCom,
                            nameCom,

                            commentsCom
                        });
                        commentItem.innerHTML = content;
                        container.appendChild(commentItem);
                    })
            }

            // Put comment in container
            putComments(photoCom, nameCom, emailCom, commentsCom);
            // Clear form after request
            document.getElementById('js-testimonials__form').reset();

            // Close form
            setTimeout(() => {
                closeComment();
            }, 1000);

        }
    }

}
if (document.querySelector('.testimonials__form--wrap') !== null) addComment();