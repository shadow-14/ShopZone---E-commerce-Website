const express = require('express'); // in node we require express package again in this file does not matter that we used it in app.js file.

const router = express.Router(); // creating router object

router.get('/', function(req,res) {
    res.redirect('products');
}); //accepting get method for '/signup' path/page , this second parameter (authController.getSignup) is a function that is exported from auth.controller.js file and used here

router.get('/401', function(req,res) {
    res.status(401).render('shared/401');
});

router.get('/403', function(req,res) {
    res.status(403).render('shared/403');
});

module.exports = router; //exporting router