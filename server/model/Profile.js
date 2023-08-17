const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const { User } = require('./User');

const Profile = sequelize.define('Profile', {
  full_name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  avatar: DataTypes.STRING,
});

User.hasOne(Profile);

module.exports = { Profile };
