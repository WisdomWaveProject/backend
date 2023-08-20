const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');

const User = sequelize.define('User', {
  fullName:DataTypes.STRING,
 
  email:DataTypes.STRING,
  password:DataTypes.STRING,
  role: {
    type: DataTypes.ENUM( 'mentor', 'mentee'),
    allowNull: false,
    defaultValue: 'mentee',
  },
});



module.exports = { User };
