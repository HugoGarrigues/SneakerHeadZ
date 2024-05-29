const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

class Wishlist extends Model {
    static async countSneakerWishlists() {
        const results = await sequelize.query(
            'SELECT IdSneaker, COUNT(*) as count FROM wishlist GROUP BY IdSneaker',
            { type: sequelize.QueryTypes.SELECT }
        );
        return results;
    }
}

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
