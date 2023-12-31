const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.connect");
const { User } = require("./User");
const Review = sequelize.define("Review", {
  comment: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
});
User.hasMany(Review);
module.exports = { Review };
