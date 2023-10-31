const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

router.get('/login', authControllers.loginview);
router.post('/login', authControllers.login);
router.get('/register', authControllers.registerview);
router.post('/register', authControllers.register);


module.exports = router