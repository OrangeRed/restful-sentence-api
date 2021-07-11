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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
