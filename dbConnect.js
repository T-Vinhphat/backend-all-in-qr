const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});
