import mongoose, { Mongoose } from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error in connecting to MongoDB", error);
    process.exit(1);
  }
};
