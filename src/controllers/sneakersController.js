
const data = require('../data/data.json');  // Assurez-vous que le chemin est correct

exports.getSneakers = (req, res) => {
    res.json(data.sneakers);
};
