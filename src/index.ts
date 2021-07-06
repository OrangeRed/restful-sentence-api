import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";

import sentenceRoute from "./routes/sentence";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => console.error(err));
mongoose.connection.once("open", () => console.log("Connected to Database"));

app.use("/sentence", sentenceRoute);

app.listen(3000, () => {
  console.log("Server is Running");
});
