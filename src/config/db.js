import mongoDB from "mongoose";

const connectDB = async () => {
  try {
    await mongoDB.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

export default connectDB;
