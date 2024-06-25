const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const { UserModel, validUser, validLogin, gettoken, valedconect } = require("../models/users.js");
const { authToken } = require("../auth/authToken.js");
const { date } = require("joi");




router.post("/logup", async (req, res) => {

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
    user.pass = undefined
    let newtoken = gettoken(user);
    res.json({ token: newtoken });;
  }
  catch (err) {
    console.log(err);
    res.status(400).json({ err: "Email already in system or there anothe problem" })
  }

});



router.post("/login", async (req, res) => {
 let validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  // נבדוק אם המייל שנשלח בבאדי קיים במסד נתונים
  let user = await UserModel.findOne({ name: req.body.name }).select('+pass');
  if (!user) {
    return res.status(401).json({ msg: "User not found" });
  }
  // נבדוק אם הסיסמא שנשלחה מתאימה להצפנה שנמצאת במסד
  let passValid = req.body.pass === user.pass;
  // let passValid = await bcrypt.compare(req.body.pass,user.pass);
  if (!passValid) {
    return res.status(401).json({ msg: "Password worng" });
  }
  user.pass = undefined;
  let newtoken = gettoken(user);
  res.json({ token: newtoken });
  // נחזיר הודעה שהכל בסדר ונייצר טוקן
})

router.get("/", authToken, async (req, res) => {
  let user = await UserModel.findOne({ id: req.tokenData._id }, { pass: 0 });
  res.json(user)
})

router.post("/addFrind", authToken, async (req, res) => {
  console.log(req.body);
  let userIdToAdd = req.body.user_id;
  let tokenUserId = req.tokenData.user._id;
  let user = await UserModel.findById(tokenUserId);
  if (!user.friends.includes(userIdToAdd) && userIdToAdd != tokenUserId) {
    user.friends.push(userIdToAdd);
    await user.save();
    console.log("הצליח");
    res.json("חברות הצליחה");
  }
  else {
    console.log("לא הצליח");
    res.json("אתה חבר כבר");
  }
})
router.post("/getfraind",authToken,async(req,res)=>{
  let getfraind = req.tokenData.user;
<<<<<<< HEAD
  console.log(getfraind.friends);
  let data = await UserModel.find({_id:getfraind.friends})
  console.log(date);
  res.json(data)
=======
  let userData = await UserModel.findById(getfraind);
  let friendIds = userData.friends;
  let friendsData = await UserModel.find({ _id: { $in: friendIds } });
  res.json(friendsData)
>>>>>>> ca2e085df576d4e25b2a1a3a7fb8614b61a890e3
})
module.exports = router