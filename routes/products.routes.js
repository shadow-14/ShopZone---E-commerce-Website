const express = require('express'); // in node we require express package again in this file does not matter that we used it in app.js file.

const productsController = require('../controllers/products.controller');
const router = express.Router(); // creating router object

router.get('/products', productsController.getAllProducts ); //accepting get method for '/signup' path/page , this second parameter (authController.getSignup) is a function that is exported from auth.controller.js file and used here

router.get('/products/:id', productsController.getProductDetails );

module.exports = router; //exporting router