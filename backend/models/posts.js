const mongoose = require("mongoose");

const Joi = require("joi");

const postSchema = new mongoose.Schema({
    content:String,
    createdAt: { type: Date, default: Date.now() },
    like1:Number,
    like2:Number,
    like3:Number,
    user_id:String,
    img:String
    

 
  });
  exports.PostModel = mongoose.model("posts",postSchema);

  exports.validPost= (_bodyData) => {
    let joiSchemap = Joi.object({
      content:Joi.string().min(2).max(99).required(),
      
    })
  
    return joiSchemap.validate(_bodyData);
  }
