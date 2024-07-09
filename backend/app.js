const { METHODS } = require("http");
const {routesInit} = require("./routs/confet_raauts.js");
require('dotenv').config()
require("./db/mongoConect");


const cors = require("cors")

const express = require("express");
const app = express();
app.use(cors({
    origin:"*"
}))

app.use(express.json())

routesInit(app);



let port = process.env.PORT || 3000;
app.listen(port);
