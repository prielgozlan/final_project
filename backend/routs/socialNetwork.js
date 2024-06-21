const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const {UserModel ,validUser ,validLogin, gettoken} = require("../models/users.js");
const { authToken } = require("../auth/authToken.js");




router.post("/logup",async (req,res) => {
  
//מתודה שבודקת האם התוקן תקין 
    // let decodedToken = jwt.verify() 
    let validBody = validUser(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
        let user = new UserModel(req.body);
        //TODO: להצפין את הסיסמא
        user.pass = await bcrypt.hash(user.pass, 10);
        await user.save();
        // user.pass = "*****";
        let newtoken = gettoken(user._id);
        res.json({token:newtoken});;
      }
      catch (err) {
        console.log(err);
        res.status(400).json({err:"Email already in system or there anothe problem"})
      }
  
});



router.post("/login" , async(req,res) => {
  
    let validBody =  validLogin(req.body);

    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    // נבדוק אם המייל שנשלח בבאדי קיים במסד נתונים
    let user  = await UserModel.findOne({name:req.body.name});
    if(!user){
      return res.status(401).json({msg:"User not found"});
    }
    // נבדוק אם הסיסמא שנשלחה מתאימה להצפנה שנמצאת במסד
    let passValid = req.body.pass === user.pass;
    // let passValid = await bcrypt.compare(req.body.pass,user.pass);
    if(!passValid){
      return res.status(401).json({msg:"Password worng"});
    }
    let newtoken = gettoken(user._id);
    res.json({token:newtoken});
    // נחזיר הודעה שהכל בסדר ונייצר טוקן
  })

  router.get("/",authToken, async(req,res) => {
    let user = await UserModel.findOne({id:req.tokenData._id},{pass:0});
  res.json(user)
  })


module.exports = router