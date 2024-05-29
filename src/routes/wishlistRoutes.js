const express = require('express');
const router = express.Router();
const path = require('path');
const Wishlist = require('../models/Wishlist'); // Assurez-vous que le modèle Wishlist est correctement défini
const { isAuthenticatedAPI } = require('../middleware/authMiddleware'); ; // Middleware pour vérifier l'authentification
const data = require('../data/data.json');  

// Route pour la page d'accueil
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'wishlist.html'));
});

// Route pour ajouter une sneaker à la wishlist
router.post('/api/add', isAuthenticatedAPI, async (req, res) => {
    const { sneakerId } = req.body;
    const userId = req.session.user.idUtilisateur;

    console.log("User ID:", userId);  // Log de débogage
    console.log("Sneaker ID:", sneakerId);  // Log de débogage

    try {
        if (!userId) {
            return res.status(400).json({ success: false, message: 'Utilisateur non défini' });
        }

        if (!sneakerId) {
            return res.status(400).json({ success: false, message: 'ID de sneaker non défini' });
        }

        const existingEntry = await Wishlist.findOne({ where: { IdUtilisateur: userId, IdSneaker: sneakerId } });
        if (existingEntry) {
            return res.status(400).json({ success: false, message: 'Sneaker déjà dans la wishlist' });
        }

        await Wishlist.create({ IdUtilisateur: userId, IdSneaker: sneakerId });
        res.status(201).json({ success: true, message: 'Sneaker ajoutée à la wishlist' });
    } catch (error) {
        console.error('Erreur lors de l\'ajout à la wishlist:', error);
        res.status(500).json({ success: false, message: 'Erreur interne du serveur' });
    }
});

// Route pour récupérer la wishlist de l'utilisateur connecté
router.get('/api/get', isAuthenticatedAPI, async (req, res) => {
    const userId = req.session.user.idUtilisateur;

    console.log("User ID:", userId);  // Log de débogage

    try {
        if (!userId) {
            return res.status(400).json({ success: false, message: 'Utilisateur non défini' });
        }

        const wishlistItems = await Wishlist.findAll({
            where: { IdUtilisateur: userId }
        });

        const items = wishlistItems.map(item => {
            const sneaker = data.sneakers.find(s => s.id === item.IdSneaker);
            return {
                id: item.IdSneaker,
                name: sneaker.name,
                description: sneaker.description,
                img_1: sneaker.img_1
            };
        });

        res.json(items);
    } catch (error) {
        console.error('Erreur lors de la récupération de la wishlist:', error);
        res.status(500).json({ success: false, message: 'Erreur interne du serveur' });
    }
});

// Route pour supprimer une sneaker de la wishlist
router.post('/api/remove', isAuthenticatedAPI, async (req, res) => {
    const { sneakerId } = req.body;
    const userId = req.session.user.idUtilisateur;

    console.log("User ID:", userId);  // Log de débogage
    console.log("Sneaker ID:", sneakerId);  // Log de débogage

    try {
        if (!userId) {
            return res.status(400).json({ success: false, message: 'Utilisateur non défini' });
        }

        if (!sneakerId) {
            return res.status(400).json({ success: false, message: 'ID de sneaker non défini' });
        }

        await Wishlist.destroy({ where: { IdUtilisateur: userId, IdSneaker: sneakerId } });
        res.json({ success: true, message: 'Sneaker retirée de la wishlist' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la wishlist:', error);
        res.status(500).json({ success: false, message: 'Erreur interne du serveur' });
    }
});


module.exports = router;
