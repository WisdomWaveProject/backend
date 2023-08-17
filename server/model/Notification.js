
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const { User} = require('./User'); 
const Notification = sequelize.define('Notification', {
  message: DataTypes.STRING,
  isRead: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
});

User.hasMany(Notification);
module.exports = {Notification};