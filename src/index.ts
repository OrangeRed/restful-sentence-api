import dotenv from "dotenv";
import { Mongoose } from "mongoose";
import express from "express";

import sentenceRoute from "./routes/sentence";

dotenv.config();

const app = express();
app.use(express.json());

const db = new Mongoose();
db.connect(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.connection.on("error", (err) => console.error(err));
db.connection.once("open", () => console.log("Connected to Database"));

app.use("/random", sentenceRoute);

app.listen(3000, () => {
  console.log("Server is Running");
});
