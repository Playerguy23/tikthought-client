'use strict';

(function () {
    let username;
    let password;
    let retypepassword;

    const handleUsernameChange = (event) => {
        event.preventDefault();

        username = event.target.value;
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();

        password = event.target.value;
    }

    const handleRetypepasswordChange = (event) => {
        event.preventDefault();

        retypepassword = event.target.value;
    }

    const handleSubmit = () => {
        event.preventDefault();
        if (retypepassword === password) {
            const config = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }

            fetch(`${BASE_URL}/user/signup`, config).then(response => {
                response.json().then(result => {
                    alert('Signed up succesfully!');
                });
            });
        }
    }

    const main = () => {
        let usernameInput = document.getElementById('username-input');
        let passwordInput = document.getElementById('password-input');
        let retypepasswordInput = document.getElementById('retypepassword-input');
        let loginForm = document.getElementById('login-form');

        usernameInput.addEventListener('change', handleUsernameChange);
        passwordInput.addEventListener('change', handlePasswordChange);
        retypepasswordInput.addEventListener('change', handleRetypepasswordChange);

        loginForm.addEventListener('submit', handleSubmit);
    }

    document.addEventListener('DOMContentLoaded', main);
})();