const express = require("express");
const app = require("./app");

// create a dot env file which holds api keys
//require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
