// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//router.get('/add-product', productController.getProducts);
router.post('/mark-attendence', productController.addAttendence);
router.get('/search-data/:id',productController.searchdata);

//router.get('/products', productController.getProducts);

module.exports = router;
