const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('manage', {
  Date: {
    type: DataTypes.DATEONLY,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  Naman: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Prabal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Praveen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Pankaj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Ombati: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports = Product;