const express = require("express");
const bpdyparser = require("body-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, (req, res) => {
  console.log("working");
});

app.post("/calc", (req, res) => {
  //   res.send("thank you!");
  console.log(req.body);
  let n1 = Number(req.body.v1);
  let n2 = Number(req.body.v2);
  let sum = n1 + n2;
  res.send("The sum of the two number is: " + sum);
});

app.get("/", (req, res) => {
  res.send("<h1>Hi! Prajwal</h1>");
});

app.get("/calc", (req, res) => {
  //   console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("hi its me praj!");
});

app.get("/contactus", (rea, res) => {
  res.send("this is my email: prajwalrt01@gmail.com");
});
