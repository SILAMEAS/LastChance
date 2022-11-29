import express from "express";
import cors from "cors";
import connect from "./Database/database.js";
import UserRoute from "./Routes/UserRoute.js";
import ProductRoute from "./Routes/ProductRoute.js";
import dotenv from "dotenv";
dotenv.config();
connect();
//my app
const app = express();
const port = process.env.PORT || 3000;
//middle ware
app.use(express.json());
app.use(cors());
//middle customize
app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.listen(port, () => {
  console.log("server running on port " + port);
});
