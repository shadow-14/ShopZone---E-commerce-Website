const express = require('express'); // in node we require express package again in this file does not matter that we used it in app.js file.

const adminController = require('../controllers/admin.controller');
const imageUploadMiddleware = require('../middlewares/image-upload');
const router = express.Router(); // creating router object

router.get('/products', adminController.getProducts); //  /admin/products

router.get('/products/new', adminController.getNewProduct);

router.post('/products', imageUploadMiddleware , adminController.createNewProduct);

router.get('/products/:id', adminController.getUpdateProduct);
router.post('/products/:id', imageUploadMiddleware , adminController.updateProduct);

router.delete('/products/:id' , adminController.deleteProduct);

router.get('/orders', adminController.getOrders);

router.patch('/orders/:id', adminController.updateOrder);

module.exports = router; //exporting router