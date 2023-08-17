const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Database = process.env.MONGO_URL;
mongoose
  .connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((Error) => {
    console.log(Error);
    console.log("connection Failed");
  });
