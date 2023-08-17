const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const { User } = require('./User');


const Chat = sequelize.define('Chat', {
    text: DataTypes.STRING,
  
});

User.hasMany(Chat, { as: 'chats' }); 
Chat.belongsTo(User);

module.exports = {Chat};