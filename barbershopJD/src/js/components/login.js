function login() {

    const btnLogin = document.getElementById('js-login-form-btn');
    const btnLogout = document.getElementById('js-logout-form-btn');
    const btnSingUp = document.getElementById('js-singup-form-btn');
    const rememberBtn = document.getElementById('js-remember-btn');
    let txtEmail = document.getElementById('email_field');
    let txtPassword = document.getElementById('password_field');

    btnLogin.addEventListener('click', loginEnv);
    btnSingUp.addEventListener('click', singUp);
    btnLogout.addEventListener('click', logout);

    // Add login event
    function loginEnv() {
        const email = txtEmail.value;
        const pass = txtPassword.value;

        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            var user = firebase.auth().currentUser;

            if (user != null) {
                var email_id = user.email;
                document.getElementById("user_para").innerHTML = "Здравствуйте: " + email_id;
            }

            // Handle Errors here
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Извините: " + errorMessage);

        });
    }

    // Add sinup event
    function singUp() {
        const email = txtEmail.value;
        const pass = txtPassword.value;

        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
            // Check for real email
            if (user !== firebase.auth().currentUser) {
                var email_id = user.email;
                var pass_id = user.pass;
                var user = firebase.auth();
            }

            // Handle Errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Извините: " + errorMessage);


        });
    }

    // Realtime listener
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in
            document.getElementById("user_div").style.display = "block";
            document.getElementById("login_div").style.display = "none";

            var user = firebase.auth().currentUser;

            if (user != null) {
                var email_id = user.email;
                document.querySelector('.login-btn').classList.add('hide--btn');
                document.querySelector('.logout-btn').classList.remove('hide--btn');
                document.getElementById('show-user').innerHTML = email_id;
            }

        } else {
            // No user is signed in.
            document.getElementById("user_div").style.display = "none";
            document.getElementById("login_div").style.display = "block";

        }
    });

    // Logout event
    function logout() {
        firebase.auth().signOut();
        document.querySelector('.login-btn').classList.remove('hide--btn');
        document.querySelector('.logout-btn').classList.add('hide--btn');
        document.getElementById('show-user').innerHTML = " ";
    }

}
login();