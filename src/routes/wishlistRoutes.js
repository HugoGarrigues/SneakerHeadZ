const express = require('express');
const router = express.Router();
const path = require('path');
const { isAuthenticatedAPI } = require('../middleware/authMiddleware');
const wishlistController = require('../controllers/wishlistController');

// Route pour la page d'accueil
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'wishlist.html'));
});

// Route pour ajouter une sneaker à la wishlist
router.post('/api/add', isAuthenticatedAPI, wishlistController.addToWishlist);

// Route pour récupérer la wishlist de l'utilisateur connecté
router.get('/api/get', isAuthenticatedAPI, wishlistController.getWishlist);

// Route pour supprimer une sneaker de la wishlist
router.post('/api/remove', isAuthenticatedAPI, wishlistController.removeFromWishlist);

module.exports = router;
