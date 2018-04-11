function formApplication() {

    // Initialize Firebase (ADD YOUR OWN DATA)
    var config = {
        apiKey: "AIzaSyBBbxMCRYANXjoBi81JlgO8-VWdkTRov_4",
        authDomain: "barbershopjd-2cab8.firebaseapp.com",
        databaseURL: "https://barbershopjd-2cab8.firebaseio.com",
        projectId: "barbershopjd-2cab8",
        storageBucket: "barbershopjd-2cab8.appspot.com",
        messagingSenderId: "518963994835"
    };
    firebase.initializeApp(config);

    // Reference messages collection
    var applicationRef = firebase.database().ref('applications');


    // Listen for form submit
    document.getElementById('applicationForm').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e) {
        e.preventDefault();


        // Get values
        var name = getInputVal('nameApp');
        var surname = getInputVal('surnameApp');
        var middlename = getInputVal('middlenameApp');
        var phone = getInputVal('phoneApp');
        var email = getInputVal('emailApp');
        var textComment = getInputVal('textCommentApp');
        var modelValue = null;
        var modelElements = document.getElementsByClassName('model-list-item-inpt');

        for (var i = 0; modelElements[i]; i++) {
            if (modelElements[i].checked) {
                modelValue = modelElements[i].value;
                break;
            }
        }

        var extrasValue = null;
        var extrasElements = document.getElementsByClassName('checkbox');

        for (var i = 0; extrasElements[i]; i++) {
            if (extrasElements[i].checked) {
                extrasValue = extrasElements[i].value;
                break;
            }
        }

        // Save message
        saveMessage(name, surname, middlename, email, phone, textComment, modelValue, extrasValue);

        // Clear form
        document.getElementById('applicationForm').reset();
    }

    // Function to get get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    // Save message to firebase
    function saveMessage(name, surname, middlename, phone, email, textComment, modelValue, extrasValue) {
        var newMessageRef = applicationRef.push();
        newMessageRef.set({
            name: name,
            surname: surname,
            middlename: middlename,
            phone: phone,
            email: email,
            textComment: textComment,
            modelValue: modelValue,
            extrasValue: extrasValue
        });

        // Show alert
        document.querySelector('.form__alert').classList.add('form__alert--show');

        // Hide alert after 3 seconds
        setTimeout(function() {
            document.querySelector('.form__alert').classList.remove('form__alert--show');
        }, 3000);

    }

}
if (document.querySelector('#applicationForm') !== null) formApplication();