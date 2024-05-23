const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/Utilisateur'); // Assurez-vous que le chemin est correct

const register = async (req, res) => {
    console.log('Register endpoint hit');
    const { nom, prenom, email, motDePasse } = req.body;
    try {
        console.log('Received data:', { nom, prenom, email, motDePasse });

        const existingUser = await Utilisateur.findOne({ where: { email } });
        if (existingUser) {
            console.log('Email already in use');
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(motDePasse, salt);
        console.log('Hashed password:', hashedPassword);

        const newUser = await Utilisateur.create({
            nom,
            prenom,
            email,
            motDePasse: hashedPassword
        });

        res.status(201).json({ message: 'Utilisateur créé avec succès', userId: newUser.id });
    } catch (error) {
        console.error('Erreur lors de la création de l’utilisateur:', error);
        res.status(500).json({ message: 'Erreur lors de la création de l’utilisateur', error: error.message });
    }
};

const login = async (req, res) => {
    console.log('Login endpoint hit');
    const { email, motDePasse } = req.body;
    try {
        console.log('Received data:', { email, motDePasse });

        const user = await Utilisateur.findOne({ where: { email } });
        if (!user) {
            console.log('Utilisateur non trouvé');
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        console.log('User found:', user);

        const validPassword = await bcrypt.compare(motDePasse, user.motDePasse.toString());
        if (!validPassword) {
            console.log('Mot de passe incorrect');
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.json({ message: 'Connexion réussie', token });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
    }
};

module.exports = {
    register,
    login
};
