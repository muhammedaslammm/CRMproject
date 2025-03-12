import mongoose from "mongoose";
import app from "../server.js";

const connectDB = async () => {
  const PORT = process.env.PORT || 4000;
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("database connected");
    app.listen(PORT, () =>
      console.log(`server listening for request via PORT ${PORT}`)
    );
  } catch (error) {
    console.log("database connection failed", error);
  }
};

export default connectDB;
