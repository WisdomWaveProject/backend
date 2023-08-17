const express = require("express");
const sequelize = require("./db/db.connect");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { Notification } = require('./model/Notification'); 
const { Profile} = require('./model/Profile'); 
const { Review } = require('./model/Review'); 
const { User} = require('./model/User'); 
const { Order} = require('./model/Order'); 
const { Chat} = require('./model/Chat'); 


app.use(express.json());
app.use(cors());

// app.use(Router);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync({ force: true }); // Change this to "true" when You need to drop and change Tables (auto change)
  }) //Keep it False if you are testing
  .then(() => {
    console.log("Models are synchronized with the database.");
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
