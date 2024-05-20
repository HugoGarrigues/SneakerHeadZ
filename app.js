require('dotenv').config();
const express = require('express');
const path = require('path');
const { testConnection } = require('./src/config/db');
const app = express();
const port = 3000;


// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Importation des routeurs
const homeRouter = require('./src/routes/homeRoutes');
const wishlistRouter = require('./src/routes/wishlistRoutes');
const newsRouter = require('./src/routes/newsRoutes');
const accountRouter = require('./src/routes/accountRoutes');
const collectionRouter = require('./src/routes/collectionRoutes');

// Utilisation des routeurs
app.use('/', homeRouter);
app.use('/wishlist', wishlistRouter);
app.use('/news', newsRouter);
app.use('/account', accountRouter);
app.use('/collection', collectionRouter);

// Test de connexion DB
testConnection();

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}`);
});
