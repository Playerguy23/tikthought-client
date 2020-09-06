'use strict';

(function () {
    let username;
    let password;
    let retypepassword;

    let error;

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (retypepassword === password) {
            const config = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }

            fetch(`${BASE_URL}/user/signup`, config).then(response => {
                if (response.ok) {
                    response.json().then(result => {
                        alert('Signed up succesfully!');
                        window.location.href = '/login';
                    });
                } else {
                    response.json().then(result => {
                        error.textContent = result.msg;
                        setInterval(() => {
                            error.textContent = '';
                        }, 10000);
                    });
                }
            });
        } else {
            error.textContent = 'Password and retypepassword has to be the same.';

            setInterval(() => {
                error.textContent = '';
            }, 10000);
        }
    }

    const main = () => {
        let usernameInput = document.getElementById('username-input');
        let passwordInput = document.getElementById('password-input');
        let retypepasswordInput = document.getElementById('retypepassword-input');
        let loginForm = document.getElementById('login-form');

        error = document.getElementById('error');

        usernameInput.addEventListener('change', handleUsernameChange);
        passwordInput.addEventListener('change', handlePasswordChange);
        retypepasswordInput.addEventListener('change', handleRetypepasswordChange);

        loginForm.addEventListener('submit', handleSubmit);
    }

    document.addEventListener('DOMContentLoaded', main);
})();