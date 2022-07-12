const mongoose = require("mongoose");
mongoose.Promise = Promise;

module.exports.connect = async () => {
  try {
    if (process.env.APP_DEBUG) {
      mongoose.set("debug", true);
    }

    if (mongoose.connection.readyState) {
      return;
    }

    const host = process.env.MONGODB_HOST;
    const newOpts = {
      dbName: process.env.DATABASE_NAME,
      user: process.env.MONGODB_CLUSTER_USERNAME,
      pass: process.env.MONGODB_CLUSTER_PASSWORD,
      autoIndex: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    mongoose.connect(host, newOpts);
    console.log('Connected to database...')
  } catch (err) {
    console.log(
      "Something went wrong while connecting to the mongodb database!"
    );
    console.error(err);
  }
};
