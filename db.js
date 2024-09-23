const mongoose = require("mongoose");

const uri = 'mongodb://127.0.0.1:27017/SmokeTrees';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("<----->Connected to Mongodb<----->");
  } catch (error) {
    console.log("Something went wrong while connecting to DataBase");
    console.log(error);
  }
};

module.exports = connectDB;
