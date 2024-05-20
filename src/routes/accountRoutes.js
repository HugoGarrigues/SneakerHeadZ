const express = require('express');
const router = express.Router();
const path = require('path');

// Route pour la page d'accueil
router.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'account.html'));
});

module.exports = router;
