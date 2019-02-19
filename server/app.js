const express = require("express");
const morgan = require("morgan");

const initializeServer = () => {
  const app = express();
  app.use(morgan("combined"));

  app.get("/api/", async (req, res) => {});

  return app;
};

module.exports = initializeServer;
