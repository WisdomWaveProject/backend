const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const { User } = require('./User');

const Order = sequelize.define('Order', {
  bookedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Accepted', 'Completed', 'Canceled'),
    allowNull: false,
    defaultValue: 'Pending',
  },
});

User.hasMany(Order)

module.exports = Order;
