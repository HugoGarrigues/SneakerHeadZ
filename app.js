const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Importation des routeurs
const homeRouter = require('./routes/homeRoutes');
const wishlistRouter = require('./routes/wishlistRoutes');
const newsRouter = require('./routes/newsRoutes');
const accountRouter = require('./routes/accountRoutes');
const collectionRouter = require('./routes/collectionRoutes');

// Utilisation des routeurs
app.use('/', homeRouter);
app.use('/wishlist', wishlistRouter);
app.use('/news', newsRouter);
app.use('/account', accountRouter);
app.use('/collection', collectionRouter);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}`);
});
