'use strict';

(function () {
    let username;
    let password;

    let error;

    const handleUsernameChange = (event) => {
        event.preventDefault();

        username = event.target.value;
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();

        password = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }

        fetch(`${BASE_URL}/user/login`, config).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    localStorage.setItem('user', JSON.stringify(result));

                    window.location.href = '/user/home';
                });
            } else {
                response.json().then(result => {
                    error.textContent = result.msg;

                    setInterval(() => {
                        error.textContent = '';
                    }, 10000)
                });
            }
        });
    }

    const main = () => {
        let usernameInput = document.getElementById('username-input');
        let passwordInput = document.getElementById('password-input');
        let loginForm = document.getElementById('login-form');

        error = document.getElementById('error');

        usernameInput.addEventListener('change', handleUsernameChange);
        passwordInput.addEventListener('change', handlePasswordChange);

        loginForm.addEventListener('submit', handleSubmit);
    }

    document.addEventListener('DOMContentLoaded', main);
})();