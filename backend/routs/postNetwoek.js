const express = require("express");
<<<<<<< HEAD

const router = express.Router();
const {PostModel} = require("../models/posts.js")

router.get("/", async (req, res) => {
=======

const router = express.Router();

const {PostModel} = require("../models/posts")

router.get("/", async (req, res) => {
    let data = await PostModel.find({});
    res.json(data)
>>>>>>> 946f4b172dfa0f22c4993a3e17f585efe220424c
    
    let data = await PostModel.find({});
    res.json(data)

})

module.exports = router