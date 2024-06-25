const express = require("express");

const router = express.Router();

const {validPost, PostModel} = require("../models/posts")
const { authToken } = require("../auth/authToken.js");

router.get("/", async (req, res) => {
    let data = await PostModel.find({});
    res.json(data)

})

router.post("/" , authToken, async(req,res) => {
    // let valdiateHeader = validPost(req.header);
    // let valdiateBody = validPost(req.body);
    let valdiateBody = validPost(req.body);
    

    
    console.log(valdiateBody);
    if(valdiateBody.error){
      return res.status(400).json(valdiateBody.error.details)
    }
    try{
      let post = new PostModel(req.body);

      post.user_id = req.tokenData.user._id;
      console.log(post.user_id)
      await post.save();
      res.status(201).json({post});
    }
    catch(err){
      console.log(err);
      res.status(500).json(err)
    }
  })
  
  router.get("/:idget",authToken,async(req,res) => {
    try{
      let idget = req.params.idget
      let data
      if(req.tokenData.user._id == idget){
        data = await PostModel.find({user_id:idget});
      }
      else{
        data = await PostModel.find({msg:"err"});
      }
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json(err)
    }
  })
  router.delete("/:idDel",authToken,async(req,res) => {
    try{
      let idDel = req.params.idDel
      let data;
      
    data = await PostModel.deleteOne({_id:idDel,user_id:req.tokenData.user._id});
      
    
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json(err)
    }
  })
module.exports = router