import express from "express";
import { Types } from "mongoose";
import Sentence from "../models/sentence";

const router = express.Router();

// Update sentence with given id
router.patch("/", (req, res) => {
  try {
    const updates = { jap: req.body.jap, eng: req.body.eng };
    const databaseId = new Types.ObjectId(req.body.id);

    Sentence.updateOne(
      { _id: databaseId },
      { $set: updates },
      { omitUndefined: true }
    )
      .then((result) => {
        res
          .status(200)
          .send(
            `Entry: ${databaseId} ${
              result.nModified ? "" : "un"
            }successfully patched`
          );
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
