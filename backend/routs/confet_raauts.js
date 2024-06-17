const socialR = require("./socialNetwork");
const postsR = require("./postNetwoek");

exports.routesInit = (app) => {
  app.use("/posts ", postsR);
  app.use("/users", socialR);
};
