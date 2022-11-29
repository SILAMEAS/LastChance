import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
await mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("db connected"))
  .catch((e) => console.log(e));
export default mongoose;
