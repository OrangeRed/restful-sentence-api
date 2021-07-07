import express from "express";
import Sentence from "../models/sentence";

const router = express.Router();

// Post sentence
// source: required,
// eng: required,
// jap: required
router.post("/", (req, res) => {
  const newSentence = new Sentence({
    source: req.body.source,
    eng: req.body.eng,
    jap: req.body.jap,
  });

  newSentence
    .save()
    .then((result) => {
      res.status(200).json({ created: result });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

export default router;
