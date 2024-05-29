const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/Utilisateur');

const register = async (req, res) => {
    const { nom, prenom, email, motDePasse } = req.body;
    try {
        const existingUser = await Utilisateur.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(motDePasse, salt);
        const newUser = await Utilisateur.create({
            nom,
            prenom,
            email,
            motDePasse: hashedPassword
        });
        req.session.user = { idUtilisateur: newUser.idUtilisateur, nom: newUser.nom, prenom: newUser.prenom, email: newUser.email };
        res.status(201).json({ message: 'Utilisateur créé avec succès', userId: newUser.idUtilisateur });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l’utilisateur', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, motDePasse } = req.body;
    try {
        const user = await Utilisateur.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        const validPassword = await bcrypt.compare(motDePasse, user.motDePasse.toString());
        if (!validPassword) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
        req.session.user = { idUtilisateur: user.idUtilisateur, nom: user.nom, prenom: user.prenom, email: user.email };
        res.json({ message: 'Connexion réussie', user: req.session.user });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
    }
};

const getUserInfo = (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({ message: 'Utilisateur non connecté' });
    }
};

const checkAuth = (req, res) => {
    if (req.session && req.session.user) {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }
};

module.exports = {
    register,
    login,
    getUserInfo,
    checkAuth
};
