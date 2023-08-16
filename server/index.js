const express = require("express");
const sequelize = require("./db/db.connect");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");



app.use(express.json());
app.use(cors());

// app.use(route);
// app.use("/admin", adminRouter);
// app.use("/auth", authRouter);
// app.use("/clients", clientRouter);
// app.use("/sellers", sellerRouter);
// app.use("/categories", categoryRouter);
// app.use("/products", productRouter);
// app.use("/orders", orderRouter);
// app.use("/reviews", reviewRouter);

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
