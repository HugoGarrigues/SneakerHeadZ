const express = require('express');
const router = express.Router();
const path = require('path');
const newsData = require('../data/news.json');  // Assurez-vous que le chemin est correct

// API route for getting all news
router.get('/api', (req, res) => {
    res.json(newsData.news);
});

// API route for getting news by ID
router.get('/api/:id', (req, res) => {
    const newsItem = newsData.news.find(n => n.id.toString() === req.params.id);
    if (newsItem) {
        res.json(newsItem);
    } else {
        res.status(404).send('News not found');
    }
});

// Route to serve the news.html page
router.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'news.html'));
});

module.exports = router;
