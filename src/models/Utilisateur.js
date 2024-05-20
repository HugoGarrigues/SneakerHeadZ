const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Utilisateur extends Model {}

Utilisateur.init({
    idUtilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    motDePasse: {
        type: DataTypes.VARBINARY(255),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'utilisateur',
    tableName: 'utilisateur',
    timestamps: false
});

module.exports = Utilisateur;
