const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const { User } = require('./User');

const Profile = sequelize.define('Profile', {
  FullName: DataTypes.STRING,
  title:DataTypes.STRING,
  bio: DataTypes.TEXT,
  avatar: DataTypes.STRING,
  Expertise:DataTypes.STRING,
  Disciplines:DataTypes.STRING,
  FluentIn:DataTypes.STRING,
  availableAt:DataTypes.DATE
});

User.hasOne(Profile);

module.exports = { Profile };
