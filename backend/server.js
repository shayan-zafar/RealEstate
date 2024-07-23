import express from "express";
import "dotenv/config";
import productRouts from "./routes/porducts.route.js";
const app = express();

app.use("/", productRouts);

app.listen(process.env.PORT, () => {
  console.log("Server is running ");
});
