const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Profile = sequelize.define('Profile', {
  full_name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  avatar: DataTypes.STRING,
});

module.exports = Profile;
