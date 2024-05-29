const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

class Wishlist extends Model {}

Wishlist.init({
    IdWishlist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IdUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdSneaker: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Wishlist',
    tableName: 'wishlist',
    timestamps: false
});

module.exports = Wishlist;
