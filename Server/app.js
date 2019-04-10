const express = require('express');
const app = express();
const morgan = require('morgan'); // for logging in the console what APIs are hit
const bodyParser = require('body-parser'); // for parsing JSON and URL encoded 

const flowersRoutes = require('./routes/flowers');
const orderRoutes = require('./routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // allow server and client ports to communicate w each other without CORS error (a security mechanism from the browser)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization') // Defining what kind of headers we want to accept
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
});

// Routes which should handle requests
app.use('/flowers', flowersRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;