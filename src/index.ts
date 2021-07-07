import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import {
  getSentences,
  getAllSentences,
  postSentences,
  patchSentences,
  deleteSentences,
} from "./routes/sentences";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("Connected to Database"));

// Routes
app.use("/all", getAllSentences);
app.use("/search", getSentences);
app.use("/post", postSentences);
app.use("/patch", patchSentences);
app.use("/delete", deleteSentences);

app.listen(3000, () => {
  console.log("Server is Running");
});
