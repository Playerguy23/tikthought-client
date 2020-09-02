const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
app.use(morgan('combined'));

app.listen(PORT, HOST, () => {
    console.log(`Server is running posrt ${PORT}. Server is hosted by ${HOST}.`)
})