const mongoose = require("mongoose");

// connecting to database
mongoose.connect("mongodb://localhost/TODO-APP");

const db = mongoose.connection;

// error
db.on("error", (err) => {
  console.log(err.message);
});
// running db
db.once("open", () => {
  console.log("Successfully connected");
});
