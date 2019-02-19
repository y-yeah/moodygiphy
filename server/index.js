const express = require("express");
const morgan = require("morgan");

// create a dot env file which holds api keys
//require("dotenv").config();

const app = express();
app.use(morgan("combined"));

app.get("/", async (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
