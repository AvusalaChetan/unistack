import mongoose from "mongoose";
import User from "../models/userModel";

const dbConnection = mongoose
  .connect(process.env.MONGOOSE_URI || "mongodb://localhost:27017/unistack")
  .then(async () => {
    await User.syncIndexes();
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

export default dbConnection;
