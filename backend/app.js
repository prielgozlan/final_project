const { METHODS } = require("http");
const {mongoose} = require("./db/mongoConect");
const {routesInit} = require("./routs/confet_raauts.js");
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
