const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');

const User = sequelize.define('User', {
  firstName:DataTypes.STRING,
  lastName:DataTypes.STRING,
  email:DataTypes.STRING,
  password:DataTypes.STRING,
  bio:DataTypes.TEXT,
  role: {
    type: DataTypes.ENUM( 'mentor', 'mentee'),
    allowNull: false,
    defaultValue: 'mentee',
  },
});



module.exports = { User };
