import express from "express";
import Sentence from "../models/sentence";

const router = express.Router();

// Get random sentence
router.get("/", (req, res) => {
  Sentence.find()
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        error: err,
      });
    });
});

//Search sentence with jp word
router.get("/jp/:word", (req, res) => {
  res.send(`Here's a sentence with ${req.params.word}`);
});

//Search sentence with en word
router.get("/en/:word", (req, res) => {
  res.send(`Here's a sentence with ${req.params.word}`);
});

//Add sentence
router.post("/", (req, res) => {
  const sentence = new Sentence({
    source: req.body.source,
    eng: req.body.eng,
    jap: req.body.jap,
  });
  sentence
    .save()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//Update sentence with given id
router.patch("/", (req, res) => {
  const commands = { jap: req.body.jap, eng: req.body.eng };

  Sentence.updateOne(
    { _id: req.body.id },
    { $set: commands },
    { omitUndefined: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//Delete sentence with given id
router.delete("/", (req, res) => {
  Sentence.deleteOne({ _id: req.body.id })
    .then(() => {
      res.status(200).json({ message: `sentence ${req.body.id} deleted` });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

export default router;
