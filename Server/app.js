const express = require('express');
const app = express();
const morgan = require('morgan'); // for logging in the console what APIs are hit

const flowersRoutes = require('./routes/flowers');
const orderRoutes = require('./routes/orders');

app.use(morgan('dev'));

app.use('/flowers', flowersRoutes);
app.use('/orders', orderRoutes);

module.exports = app;