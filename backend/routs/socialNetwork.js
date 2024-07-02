


const express = require("express");
const bcrypt = require("bcrypt")
const router = express.Router();
const { UserModel, validUser, validLogin, gettoken, valedconect } = require("../models/users.js");
const { authToken } = require("../auth/authToken.js");
const { date } = require("joi");
const { clod } = require("../index.js");



router.post("/upload", authToken,  async (req, res) => {
  try {
      const filePath = req.file;// קבלת נתיב הקובץ בשרת
      const userId = req.tokenData.user._id;

      // העלאת התמונה ל-Cloudinary
      const result = await clod(filePath);
      console.log(result);

      // עדכון המשתמש עם התמונה החדשה
      const updatedUser = await UserModel.findByIdAndUpdate(
          userId,
          { imguser: result.secure_url },
          { new: true }
      );

      if (!updatedUser) {
          return res.status(404).json({ error: 'משתמש לא נמצא' });
      }

      // מחיקת הקובץ הזמני מהשרת אם צריך
      fs.unlinkSync(filePath);

    //  מחזיר תשובה עם המשתמש המעודכן
      res.status(200).json({ 
          message: "התמונה הועלתה ועודכנה בהצלחה", 
          user: updatedUser 
      });
  } catch (error) {
      console.error('שגיאה בהעלאת התמונה:', error);
      res.status(500).json({ error: 'נכשל בהעלאת התמונה' });
  }
});


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
  let userData = await UserModel.findById(getfraind);
  let friendIds = userData.friends;
  let friendsData = await UserModel.find({ _id: { $in: friendIds } });
  res.json(friendsData)
})
router.delete("/:delfrand", authToken, async (req, res) => {
  try {
    let friendId = req.params.delfrand;
    let userId = req.tokenData.user._id;

    // מצא את המשתמש לפי מזהה
    let user = await UserModel.findById(userId);
    
   

 

    // מצא את האינדקס של החבר במערך החברים
    const index = user.friends.indexOf(friendId);

    if (index === -1) {
      return res.status(404).json({ error: "החבר לא נמצא במערך" });
    }

    // הסר את החבר מהמיקום המתאים במערך
    user.friends.splice(index, 1);

    // שמור את השינויים במסד הנתונים
    await user.save();

    res.json({ message: "החבר הוסר בהצלחה" });
  } catch (error) {
    console.error("שגיאה:", error);
    res.status(500).json({ error: "שגיאה בשרת", details: error.message });
  }
});

module.exports = router