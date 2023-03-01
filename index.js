/* Basic express app to test api operation */

require("dotenv").config(); // Load .env variables
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
const URI = process.env.URI;
console.log(URI || "hello");

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

if (URI) {
  mongoose.connect(URI).catch((err) => console.error(err));
} else
  console.error(
    "No URI specified in .env\nApplication cannot connect to mongoDB."
  );
