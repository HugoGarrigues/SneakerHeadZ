const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Wishlist extends Model {}

Wishlist.init({
    idWishlist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idSneaker: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'wishlist',
    tableName: 'wishlist',
    timestamps: false
});

module.exports = Wishlist;
