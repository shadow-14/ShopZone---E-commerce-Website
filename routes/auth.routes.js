const express = require('express'); // in node we require express package again in this file does not matter that we used it in app.js file.

const authController = require('../controllers/auth.controller'); //importing functions of auth.controller.js functions 

const router = express.Router(); // creating router object

router.get('/signup', authController.getSignup); //accepting get method for '/signup' path/page , this second parameter (authController.getSignup) is a function that is exported from auth.controller.js file and used here

router.post('/signup', authController.signup);

router.get('/login', authController.getLogin); //same as above

router.post('/login', authController.login);

router.post('/logout', authController.logout);


module.exports = router; //exporting router