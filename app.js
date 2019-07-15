const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);   //when /products is clicked, it will redirect to productRoutes to render page.
app.use('/orders', orderRoutes);

module.exports = app;        // We will import the app.js in the server.js file.
