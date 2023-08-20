const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const { User } = require('./User');

const Booking = sequelize.define('Booking', {
  bookedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

});

User.hasMany(Booking)

module.exports = Booking;
