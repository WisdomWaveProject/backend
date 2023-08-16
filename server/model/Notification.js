const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
});

const Notification = sequelize.define('Notification', {
  message: DataTypes.STRING,
  isRead: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
});

module.exports = Notification;
