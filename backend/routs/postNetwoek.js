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

router.post("/idget", authToken, async (req, res) => {
  try {
    let idget = req.tokenData.user._id;
    let data;

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
    console.log(idDel);
    // let post = await PostModel.findOne({_id:idDel});
    // console.log(post)
    // if (!post) {
    //   res.status(404).json({ msg: "post not found" });
    // }
    //  else if (post.user_id != req.tokenData.user._id) {
    //   res
    //     .status(403)
    //     .json({ msg: "You do not have permission for this action " })
    //     .send();
    // } else {
    
      let data;
      data = await PostModel.deleteOne({ _id: idDel });
      res.json("מחיקה הצליחה");
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:postId", authToken, async (req, res) => {
    try {
        let postId = req.params.postId;
        let userId = req.tokenData.user._id;
        // עדכון הפוסט בבסיס הנתונים
        let result = await PostModel.updateOne(
            { _id: postId, user: userId }, // הקריטריון למציאת הפוסט לעדכון
            { $set: req.body } // השדות לעדכון
        );
             // מציאת הפוסט המעודכן להחזרה בתגובה
        let updatedPost = await PostModel.findById(postId);
        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "שגיאת שרת" });
    }
});




module.exports = router;
