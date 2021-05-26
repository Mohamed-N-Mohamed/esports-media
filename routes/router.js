//express
const express = require("express");

//router
const route = express.Router();

const apiPath = require("./axios");
//get single champion
route.get("/upcoming", apiPath.getUpcomingtournaments);

module.exports = route;
