const express = require('express');
const app = express();
const morgan = require('morgan'); // for logging in the console what APIs are hit
const bodyParser = require('body-parser'); // for parsing JSON and URL encoded 

const flowersRoutes = require('./routes/flowers');
const orderRoutes = require('./routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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