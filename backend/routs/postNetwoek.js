const express = require("express");

const router = express.Router();

const {PostModel} = require("../models/posts")

router.get("/", async (req, res) => {
    let data = await PostModel.find({});
    res.json(data)

})

module.exports = router