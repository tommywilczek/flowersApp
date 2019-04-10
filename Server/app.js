const express = require('express');
const app = express();

const flowersRoutes = require('./routes/flowers');
const orderRoutes = require('./routes/orders');

app.use('/flowers', flowersRoutes);
app.use('/orders', orderRoutes);

module.exports = app;