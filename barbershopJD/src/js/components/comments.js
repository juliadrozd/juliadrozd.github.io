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

        // Listen for form submit
        document.getElementById('js-testimonials__form').addEventListener('submit', submitForm);

        // Submit form function
        function submitForm(e) {
            e.preventDefault();

            function saveValue() {
                // Get elements
                let nameCom = getInputVal('js-testimonials__name');
                let emailCom = getInputVal('js-testimonials__email');
                let commentsCom = getInputVal('js-testimonials__comments');
                let photoCom;
                // Function to get form values
                function getInputVal(id) {
                    return document.getElementById(id).value;
                }
                // Reference comments collection
                const commentsRef = firebase.database().ref('comments');
                const newMessageRef = commentsRef.push();

                function getValue() {
                    // Get img
                    let imageFile = document.getElementById('js-testimonials__avatar').files[0];

                    //Create a storage ref
                    const storageRef = firebase.storage().ref(imageFile.name);

                    // Create the file metadata
                    let metadata = {
                        contentType: 'image/jpeg'
                    };

                    //Upload file
                    let task = storageRef.put(imageFile, metadata);
                    task.on('state_changed',
                        function getURL() {
                            const imgurl = task.snapshot.downloadURL;
                            let photoCom = imgurl;
                            newMessageRef.set({ photoCom, emailCom, nameCom, commentsCom });


                            // Put comment to template
                            function putComments() {
                                let container = document.querySelector('.testimonials__slider-track');
                                return fetch('https://barbershopjd-2cab8.firebaseio.com/comments.json')
                                    .then(r => r.json())
                                    .then(item => {
                                        let commentItem = document.createElement('figure');
                                        commentItem.className = 'testimonials__slider-item';
                                        let content = ({ photoCom, nameCom, commentsCom });
                                        content = nunjucks.render('testimonialsItem.njk', {
                                            photoCom,
                                            nameCom,
                                            commentsCom
                                        });
                                        commentItem.innerHTML = content;
                                        container.appendChild(commentItem);
                                    })

                            }
                            putComments(); // --> reset and close

                        }
                    );

                }
                getValue();
            }
            saveValue();

            // Clear form after request
            document.getElementById('js-testimonials__form').reset();

            // Close form
            setTimeout(() => {
                closeComment();
            }, 1000);

        }
    }

}

if (document.getElementById('testimonials-section') !== null) addComment();