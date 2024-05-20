const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','routes', 'home.html'));
});

app.get('/wishlist', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'routes', 'wishlist.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'routes', 'news.html'));
});

app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'routes', 'account.html'));
});

app.get('/collection', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'routes', 'collection.html'));
});


app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}`);
});