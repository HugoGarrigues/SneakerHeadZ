const express = require('express');
const router = express.Router();
const path = require('path');
const data = require('../data/data.json');

// API route for getting sneaker details by ID
router.get('/api/:id', (req, res) => {
    const sneaker = data.sneakers.find(s => s.id.toString() === req.params.id);
    if (sneaker) {
        res.json(sneaker);
    } else {
        res.status(404).send('Sneaker not found');
    }
});

// Route to serve the sneakers.html page
router.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sneakers.html'));
});

module.exports = router;
