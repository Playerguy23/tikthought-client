const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('home/index.ejs');
});

module.exports = router;