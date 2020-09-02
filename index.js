const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

const publicRote = require('./routes/publicRote');

app.use('/', publicRote);

app.listen(PORT, HOST, () => {
    console.log(`Server is running posrt ${PORT}. Server is hosted by ${HOST}.`)
})