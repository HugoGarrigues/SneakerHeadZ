const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Vente extends Model {}

Vente.init({
    idSneaker: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    estimationVentes: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'vente',
    tableName: 'vente',
    timestamps: false
});

module.exports = Vente;
