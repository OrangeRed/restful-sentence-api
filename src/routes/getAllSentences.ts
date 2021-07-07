import express from "express";
import Sentence from "../models/sentence";

const router = express.Router();

// Get all sentences
router.get("/", (req, res) => {
  Sentence.find()
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

export default router;
