import mongoose from "mongoose";

export default function connectDB() {
  const url = "mongodb+srv://nhutblog:z2PuiZHDQygFvjP2@nhuthuynh.37otbaz.mongodb.net/?retryWrites=true&w=majority&appName=nhuthuynh";

  try {
    mongoose.connect(url, {
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
