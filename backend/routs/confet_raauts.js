const socialR = require("./socialNetwork");
const postsR = require("./postNetwoek");

exports.routesInit = (app) => {
  app.use("/posts", postsR);
<<<<<<< HEAD
  app.use("/users/", socialR);
=======
  app.use("/users", socialR);
>>>>>>> 946f4b172dfa0f22c4993a3e17f585efe220424c
};
