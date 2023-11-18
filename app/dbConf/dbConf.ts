import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("connection error, Please check if MongoDB is running" + err);
      process.exit();
    });
  } catch (error: any) {
    console.log("Something went wrong");
    console.log(error);
  }
}
