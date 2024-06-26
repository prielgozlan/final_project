const mongoose = require("mongoose");
const moment = require('moment');
const Joi = require("joi");

const postSchema = new mongoose.Schema({
    name:String,
    content:String,
    createdAt: { type: String, default: () => moment().format('DD/MM/YYYY') },
    like1:Number,
    like2:Number,
    like3:Number,
    user_id:String,
    img:String
    

 
  });
  exports.PostModel = mongoose.model("posts",postSchema);

  exports.validPost= (_bodyData) => {
    let joiSchemap = Joi.object({
      content:Joi.string().min(10).required(),
      
    })
  
    return joiSchemap.validate(_bodyData);
  }
