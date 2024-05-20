const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Sneaker extends Model {}

Sneaker.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mark: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_drop: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    date_drop: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_2: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'sneaker',
    tableName: 'sneakers',
    timestamps: false 
});

module.exports = Sneaker;
