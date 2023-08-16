const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
});

const Review = sequelize.define('Review', {
  rating: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
});

module.exports = Review;
