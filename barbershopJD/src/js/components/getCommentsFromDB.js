import nunjucks from './nunjucks.js';

function getCommentsFromDB() {

    // Reference comments collection
    let commentsRef = firebase.database().ref('comments/');

    // Get all comments from DB
    commentsRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key; // comment's ID
            let childData = childSnapshot.val(); // get object

            for (let prop in childData) {
                if (nameCom == childData.nameCom && commentsCom == childData.commentsCom) {
                    break;
                }
                let nameCom = childData.nameCom;
                let commentsCom = childData.commentsCom;
                let content = ({ nameCom, commentsCom }); // get keys and values

                let container = document.querySelector('.testimonials__slider-track');
                let commentItem = document.createElement('figure');
                commentItem.className = 'testimonials__slider-item';
                content = nunjucks.render('testimonialsItem.njk', {
                    nameCom,
                    commentsCom
                });
                commentItem.innerHTML = content;
                container.appendChild(commentItem);

            }

        });
    })
}
getCommentsFromDB();