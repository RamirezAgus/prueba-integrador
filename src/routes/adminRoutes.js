const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.createview);
router.post('/create', adminControllers.createitem);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.edititem);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router