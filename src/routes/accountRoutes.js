const express = require('express');
const router = express.Router();
const path = require('path');
const accountController = require('../controllers/accountController');

// Routes pour les pages HTML
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

// Routes pour les actions de connexion et d'inscription
router.post('/login', accountController.login);
router.post('/register', accountController.register);

module.exports = router;
