const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here
const Limit = 1000000;
// const ResultLimit = 1000000;
let status;
let message;
let sum;
let difference, result;
app.get("/", (req, res) => {
  res.end("hello world");
});
app.post("/add", (req, res) => {
  if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
    status = "failure";
    message = "Invalid Data types";
  } 
  sum = req.body.num1 + req.body.num2;
  if (req.body.num1 < Limit || req.body.num2 < Limit || sum < Limit) {
    status = "error";
    message = "underflow";
  } else if (
    req.body.num1 > Limit ||
    req.body.num2 > Limit ||
    sum > Limit
  ) {
    status = "error";
    message = "overflow";
  }else {
    status = "sucess";
    message = "the sum of given two numbers";  
  }

  res.json({ status: status, message: message, sum: sum });
});

app.post("/sub", (req, res) => {
  if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
    status = "failure";
    message = "Invalid Data types";
  } else {
    difference = req.body.num1 - req.body.num2;
    if (req.body.num1 < Limit || req.body.num2 < Limit || difference < Limit) {
      status = "error";
      message = "underflow";
    } else if (
      req.body.num1 > Limit ||
      req.body.num2 > Limit ||
      difference > Limit
    ) {
      status = "error";
      message = "overflow";
    } else {
      status = "success";
      message = "the difference of given two numbers";
    }
  }

  res.json({ status: status, message: message, difference: difference });
});
app.post("/multiply", (req, res) => {
  if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
    status = "failure";
    message = "Invalid Data types";
  } 
  result = req.body.num1 * req.body.num2;
  if (req.body.num1 < Limit || req.body.num2 < Limit || result < Limit) {
    status = "error";
    message = "underflow";
  } else if (
    req.body.num1 > Limit ||
    req.body.num2 > Limit ||
    result > Limit
  ) {
    status = "error";
    message = "overflow"}
    else {
    status = "success";
    message = "the Multiplication of given two numbers";

    
  }

  res.json({ status: status, message: message, result: result });
});
app.post("/divide", (req, res) => {
  if (typeof req.body.num1 === "string" || typeof req.body.num2 === "string") {
    status = "failure";
    message = "Invalid Data types";
  } else if (req.num2 === 0) {
    status = "error";
    message = "Cannot divide by zero";
  } 
  result = req.body.num1 / req.body.num2;
  if (req.body.num1 < Limit || req.body.num2 < Limit || result < Limit) {
    status = "error";
    message = "underflow";
  } else if (
    req.body.num1 > Limit ||
    req.body.num2 > Limit ||
    result > Limit
  ) {
    status = "error";
    message = "overflow";
  }else {
    status = "success";
    message = "the divison of given two numbers";
    
  }

  res.json({ status: status, message: message, result: result });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
