const mongoose = require("mongoose");

const Joi = require("joi");

const postSchema = new mongoose.Schema({
    content:String,
    the_content_writer:String,
    createdAt:Date,
    comments:Array,
    likes:Array,

 
  });
  exports.PostModel = mongoose.model("posts",postSchema);
