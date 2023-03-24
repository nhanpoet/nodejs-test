const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connect() {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/blog_npoet", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connect");
      });
  } catch (error) {
    console.log("Connect Failed");
  }
}

module.exports = { connect };
