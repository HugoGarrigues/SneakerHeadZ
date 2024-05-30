
const data = require('../data/data.json'); 

exports.getSneakers = (req, res) => {
    res.json(data.sneakers);
};
