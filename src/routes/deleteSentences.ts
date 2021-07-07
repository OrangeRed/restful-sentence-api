import express from "express";
import { Types } from "mongoose";
import Sentence from "../models/sentence";

const router = express.Router();

// Delete sentence with given id
router.delete("/", (req, res) => {
  try {
    const databaseId = new Types.ObjectId(req.body.id);
    Sentence.deleteOne({ _id: databaseId })
      .then((result) => {
        if (result.deletedCount) {
          res.status(200).send(`Entry ${databaseId} deleted`);
        } else {
          res.status(400).send(`Entry ${databaseId} does not exist`);
        }
      })
      .catch((error) => {
        // Catches server error
        res.status(500).send(error.message);
      });
  } catch (error) {
    // Catches bad request
    res.status(400).send(error.message);
  }
});

export default router;
