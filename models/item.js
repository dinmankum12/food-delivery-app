const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Item = sequelize.define('Item', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Item;
