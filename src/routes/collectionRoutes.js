const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../data/data.json');  // Assurez-vous que le chemin est correct

// Route pour la page d'accueil de la collection
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'collection.html'));
});

// Route pour obtenir les données des sneakers, intégrée
router.get('/api/sneakers', (req, res) => {
    res.json(data.sneakers);
});

module.exports = router;
