//express
const express = require("express");

//router
const route = express.Router();

const apiPath = require("./axios");
//get single champion
route.get("/champion", apiPath.findEkko);

module.exports = route;
