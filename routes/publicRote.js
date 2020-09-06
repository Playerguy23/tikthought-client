const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('home/index.ejs');
});

router.get('/login', (request, response) => {
    response.render('login/login.ejs');
});

router.get('/signup', (request, response) => {
    response.render('signup/signup.ejs');
});

module.exports = router;