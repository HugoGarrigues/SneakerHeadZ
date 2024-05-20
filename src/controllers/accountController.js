const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Utilisateur } = require('../models'); // Assurez-vous que le chemin d'importation est correct

router.post('/register', async (req, res) => {
    const { nom, prenom, email, motDePasse } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(motDePasse, salt);

        const newUser = await Utilisateur.create({
            nom,
            prenom,
            email,
            motDePasse: hashedPassword
        });

        res.status(201).send({ message: 'Utilisateur créé avec succès', userId: newUser.id });
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la création de l’utilisateur', error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { email, motDePasse } = req.body;
    try {
        const user = await Utilisateur.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ message: 'Utilisateur non trouvé' });
        }

        const validPassword = await bcrypt.compare(motDePasse, user.motDePasse);
        if (!validPassword) {
            return res.status(401).send({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.send({ message: 'Connexion réussie', token });
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la connexion', error: error.message });
    }
});


router.put('/update', async (req, res) => {
    const { userId, nom, prenom, email } = req.body;
    try {
        const updatedUser = await Utilisateur.update({ nom, prenom, email }, {
            where: { id: userId }
        });

        if (updatedUser) {
            res.send({ message: 'Profil mis à jour avec succès' });
        } else {
            res.status(404).send({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Erreur lors de la mise à jour du profil', error: error.message });
    }
});


