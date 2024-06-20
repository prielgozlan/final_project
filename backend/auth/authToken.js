const jwt = require("jsonwebtoken")

exports.authToken = (req,res,next) =>{
let token = req.header("x-api-key");
if (!token){
  return res.status(401).json({msg:"you must send token"})
}
try{
  let decodedToken = jwt.verify(token,"yeudayakter");
req.tokenData = decodedToken;
next();
}
catch(err){
  res.status(401).json({msg:"token invalid or expired"})
  
}}