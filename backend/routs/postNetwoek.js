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


router.post("/likes", authToken, async (req, res) => {
  try{
  let idget = req.tokenData.user._id;
  let tableLikes = req.body;
  let post = await PostModel.find({}, {tableLikes:1 ,_id:0});
  
  if (!post.includes(idget)){
    post.push(idget);
  }
  else {
    post.pop(idget);
  }
  await PostModel.updateOne({}, {tableLikes: post});

  res.json(post.length);
  }catch(err){
    console.log(err);
    res.json(err);
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

      // מוצא את הפוסט ומתעדכן בבת אחת
      let updatedPost = await PostModel.findOneAndUpdate(
          { _id: postId, user_id: userId }, // הקריטריון למציאת הפוסט לעדכון
          { $set: req.body }, // השדות לעדכון
          { new: true } // מחזיר את הדוקומנט המעודכן
      );

      if (!updatedPost) {
          return res.status(404).json({ msg: "הפוסט לא נמצא או שאין לך הרשאה לעדכן אותו" });
      }

      res.json(updatedPost);
  } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "שגיאת שרת" });
  }
});


module.exports = router;
