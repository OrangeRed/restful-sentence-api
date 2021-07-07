import express from "express";
import { Types } from "mongoose";
import Sentence from "../models/sentence";

const router = express.Router();

// Get all sentences
router.get("/all", (req, res) => {
  Sentence.find()
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// Get sentence by id
router.get("/id/:id", (req, res) => {
  try {
    // try to cast input string to ObjectId
    const databaseId = new Types.ObjectId(req.params.id);

    Sentence.find({ _id: databaseId })
      .then((results) => {
        res.status(200).json({ sentences: results });
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  } catch (error) {
    // Catches requests with bad ids
    res.status(400).send(error.message);
  }
});

// Get sentence from source
router.get("/src/:source", (req, res) => {
  Sentence.find({ source: req.params.source })
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

// Get sentence with jp query
router.get("/jp/:jap", (req, res) => {
  Sentence.find({ jap: new RegExp(req.params.jap) })
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// Get sentence with eng query
router.get("/en/:eng", (req, res) => {
  Sentence.find({ eng: new RegExp(req.params.eng) })
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// Add sentence
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
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// Update sentence with given id
router.patch("/", (req, res) => {
  const commands = { jap: req.body.jap, eng: req.body.eng };

  Sentence.updateOne(
    { _id: req.body.id },
    { $set: commands },
    { omitUndefined: true }
  )
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// Delete sentence with given id
router.delete("/", (req, res) => {
  Sentence.deleteOne({ _id: req.body.id })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

export default router;
