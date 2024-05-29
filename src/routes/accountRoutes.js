const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated'); // Assure-toi que le chemin est correct
const router = express.Router();
const path = require('path');
const accountController = require('../controllers/accountController');

// Utilise le middleware pour rediriger si déjà connecté
router.get('/login', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

router.get('/register', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

// Route pour obtenir les informations de l'utilisateur
router.get('/info', (req, res) => {
    if (req.session && req.session.user) {
        res.sendFile(path.join(__dirname, '..', 'views', 'info.html'));
    } else {
        res.redirect('/account/login');
    }
});

// Route pour obtenir les informations de l'utilisateur (API)
router.get('/api/user', accountController.getUserInfo);

// Routes pour les actions de connexion et d'inscription
router.post('/login', accountController.login);
router.post('/register', accountController.register);


router.get('/api/checkAuth', accountController.checkAuth);


module.exports = router;
