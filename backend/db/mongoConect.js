// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/Social_Network_nies');
  await mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  // console.log("mongo exssiting");
}
module.exports = mongoose
