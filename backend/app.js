
const { METHODS } = require("http");
const dbConnect = require("./db/mongoConect");
const {routesInit} = require("./routs/confet_raauts.js");
const express = require("express");
const app = express();
app.use(express.json())

routesInit(app);
let port = process.env.PORT || 3000;
app.listen(port);
