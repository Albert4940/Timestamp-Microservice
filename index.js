/*
  This is the boilerplate code for the Timestamp Microservice project. 
  Instructions for building your project can be found at
  https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
*/
const dotenv = require("dotenv").config();
const express = require("express");
var path = require("path");
let app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Function
const handleDate = (date) => {
  const newDate = date ? new Date(date) : new Date(Date.now());
  const unixTime = Date.parse(newDate);
  return { unix: unixTime, utc: newDate.toUTCString() };
};

//Route Parameter for valid date
app.get("/api/:date", (req, res) => {
  const date = req.params.date;
  res.json(handleDate(date));
});

//Route with empty parameter
app.get("/api/", (req, res) => {
  res.json(handleDate(req.params.date));
});
app.listen(port, () => console.log(`Server runnig on port ${port}`));
