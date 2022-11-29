import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://sila:sila123@cluster0.94hkpyw.mongodb.net/app?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"))
  .catch((e) => console.log(e));
export default mongoose;
