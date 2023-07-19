const dotenv = require("dotenv").config();
const express = require("express");
let app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("Starting");
});

app.listen(port, () => console.log(`Server runnig on port ${port}`));
