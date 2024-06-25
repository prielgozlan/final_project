const mongoose = require("mongoose");

const Joi = require("joi");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now() },
  friends: Array,
  email: String,
  pass: { type: String, select: false },

  address: String,

  Marital_Status: String,
  img:String
});

exports.UserModel = mongoose.model("users", userSchema);

exports.gettoken = (user) => {
  let token = jwt.sign({ user }, "yeudayakter", { expiresIn: "60day" });
  return token;
};

exports.validUser = (_bodyData) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(99).required(),
    email: Joi.string().min(2).max(300).required().email(),
    pass: Joi.string().min(3).max(100).required(),
  });

  return joiSchema.validate(_bodyData);
};
exports.validLogin = (_bodyData) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(300).required(),
    pass: Joi.string().min(3).max(100).required(),
  });

  return joiSchema.validate(_bodyData);
};
