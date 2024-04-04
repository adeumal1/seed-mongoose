const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose
  .connect("mongodb://localhost:27017/pet-shop")
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("Error connecting to DB: " + err);
    process.exit(1); // cerramos servidor sino connecta con una DB
  });