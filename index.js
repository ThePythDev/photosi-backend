const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({});
const app = express();

const apiPrefix = process.env.API_PREFIX;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(`${apiPrefix}/products`, require("./routes/product"));

app.listen(
  process.env.PORT,
  console.log(`Api server running at localhost:${process.env.PORT}`)
);
