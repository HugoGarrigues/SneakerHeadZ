const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../data/data.json');
const Wishlist = require('../models/Wishlist'); 

// Route pour la page d'accueil de la collection
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'collection.html'));
});

// Route pour obtenir les données des sneakers, intégrée
router.get('/api/sneakers', (req, res) => {
    res.json(data.sneakers);
});

// Route pour obtenir le nombre de wishlists pour chaque sneaker
router.get('/api/sneakers/popularity', async (req, res) => {
    try {
        const popularityData = await Wishlist.countSneakerWishlists();
        res.json(popularityData);
    } catch (error) {
        console.error('Erreur lors de la récupération des données de popularité:', error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
});

module.exports = router;
