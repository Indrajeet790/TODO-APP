const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/TODO-APP"),
  {
    userNewUrlParser: true,
    UseUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully connected");
    }
  };
