const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Avis extends Model {}

Avis.init({
    idAvis: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenu: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    idUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idSneaker: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'avis',
    tableName: 'avis',
    timestamps: false
});

module.exports = Avis;
