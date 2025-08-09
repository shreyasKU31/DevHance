import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI);
    if (!res.success) {
      console.log("Database Succesfully connected");
    }
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
