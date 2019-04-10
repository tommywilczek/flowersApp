const express = require('express');
const app = express();

const flowersRoutes = require('./routes/flowers');

app.use('/flowers', flowersRoutes);

module.exports = app;