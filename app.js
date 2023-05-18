const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

app.listen(3000, () => {
  console.log("Server Running at http://localhost:3000/");
});
