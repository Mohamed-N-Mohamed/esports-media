//express
const express = require("express");

//axios
const axios = require("axios");

//app
const app = express();

//body parser
const bodyparser = require("body-parser");

//port
const port = 3000;

//path
const path = require("path");

//public folder
app.use(express.static("public"));



//load assets
app.use("/static", express.static(path.join(__dirname, "public")));

//parse request
app.use(bodyparser.urlencoded({ extended: true }));

//routers
app.use("/", require("./routes/router"));

app.listen(port, () => console.log(`server is running on port ${port}`));
