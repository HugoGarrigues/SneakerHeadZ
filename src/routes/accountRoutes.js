const express = require('express');
const router = express.Router();
const path = require('path');

// Route pour la page de connexion
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

// Route pour la page d'inscription
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

module.exports = router;
