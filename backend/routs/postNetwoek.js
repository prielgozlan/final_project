const express = require("express");

const router = express.Router();

const { validPost, PostModel } = require("../models/posts");
const { authToken } = require("../auth/authToken.js");

router.get("/", async (req, res) => {
  let data = await PostModel.find({});
  res.json(data);
});

router.post("/", authToken, async (req, res) => {
  let valdiateBody = validPost(req.body);
  console.log(valdiateBody);
  if (valdiateBody.error) {
    return res.status(400).json(valdiateBody.error.details);
  }
  try {
    let post = new PostModel(req.body);

    post.user_id = req.tokenData.user._id;
    post.name = req.tokenData.user.name;

    console.log(post.user_id);
    await post.save();
    res.status(201).json({ post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
  router.post("/idget",authToken,async(req,res) => {
    try{
      let idget = req.tokenData.user._id;
      let data
      
    data = await PostModel.find({user_id:idget});
 
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json(err)
    }
  })
  
=======
router.post("/idget", authToken, async (req, res) => {
  try {
    let idget = req.tokenData.user._id;
    let data;
>>>>>>> 1ace2971e835555719ea0d92f8abf943192983f9

    data = await PostModel.find({ user_id: idget });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:idDel", authToken, async (req, res) => {
  try {
    let idDel = req.params.idDel;
    let post = await PostModel.findOne({_id:idDel});
    console.log(post)
    if (!post) {
      res.status(404).json({ msg: "post not found" });
    } else if (post.user_id != req.tokenData.user._id) {
      res
        .status(403)
        .json({ msg: "You do not have permission for this action " })
        .send();
    } else {
      let data;
      data = await PostModel.deleteOne({ _id: idDel });
      res.json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
