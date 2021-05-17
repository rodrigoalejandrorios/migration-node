//INIT = npm start

const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRoute = require("./routes/index");
const { dbConnection } = require("./loaders/mongoose");
dbConnection();

//VARIABLE DE ENTORNO

dotenv.config();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/", indexRoute);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((req, res, err) => {
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;
