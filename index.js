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
  let newDate = date ? new Date(date) : new Date(Date.now());
  if (newDate.toString() === "Invalid Date") {
    const dateTimestamp = new Date(Number(date));
    if (dateTimestamp.toString() === "Invalid Date") {
      return { error: dateTimestamp.toString() };
    } else {
      newDate = dateTimestamp;
    }
  }
  //else newDate = new Date(newDate * 1000);

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
