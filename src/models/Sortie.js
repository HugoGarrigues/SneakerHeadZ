const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Sortie extends Model {}

Sortie.init({
    idSortie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dateSortie: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idSneaker: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'sortie',
    tableName: 'sortie',
    timestamps: false
});

module.exports = Sortie;
