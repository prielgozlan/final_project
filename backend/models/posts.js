const mongoose = require("mongoose");

const Joi = require("joi");
const postSchema = new mongoose.Schema({
    content:String,
    the_content_writer:String,
    createdAt:Date,
    comments:Array,
    likes:Array,

 
  });
  const PostModel = mongoose.model("posts",postSchema);
  exports.PostModel = PostModel;