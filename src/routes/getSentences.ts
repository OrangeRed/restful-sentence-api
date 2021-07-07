import express from "express";
import { Types } from "mongoose";
import Sentence from "../models/sentence";

const router = express.Router();

// Get sentence by id
router.get("/id/:id", (req, res) => {
  try {
    const databaseId = new Types.ObjectId(req.params.id);

    Sentence.find({ _id: databaseId })
      .then((results) => {
        res.status(200).json({ sentences: results });
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

// Get sentence from source
router.get("/src/:source", (req, res) => {
  Sentence.find({ source: req.params.source })
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

// Get sentence with jp query
router.get("/jp/:jap", (req, res) => {
  Sentence.find({ jap: new RegExp(req.params.jap) })
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

// Get sentence with eng query
router.get("/en/:eng", (req, res) => {
  Sentence.find({ eng: new RegExp(req.params.eng) })
    .then((results) => {
      res.status(200).json({ sentences: results });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

export default router;
