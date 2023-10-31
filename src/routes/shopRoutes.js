const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item); /*const id = req.params.id; res.send({item})*/
router.post('/item/:id/add', shopControllers.add);
router.get('/cart', shopControllers.cartview);
router.post('/cart', shopControllers.checkout);

module.exports = router