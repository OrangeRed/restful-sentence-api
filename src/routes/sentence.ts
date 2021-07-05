import express from "express";

const router = express.Router();

// Get random sentence
router.get("/", (req, res) => {
  res.send("Got a sentence");
});

//Search sentence with jp word
router.get("/jp/:word", (req, res) => {
  res.send(`Here's a sentence with ${req.params.word}`);
});

//Add sentence with jp word
router.post("/jp/:word", (req, res) => {
  res.send(`Added a sentenced with ${req.params.word}`);
});

//Search sentence with en word
router.get("/en/:word", (req, res) => {
  res.send(`Here's a sentence with ${req.params.word}`);
});

//Add sentence with en word
router.post("/en/:word", (req, res) => {
  res.send(`Added a sentenced with ${req.params.word}`);
});

//Update sentence with id
router.patch("/:id", (req, res) => {
  res.send(`Updated the sentence with ${req.params.id}`);
});

//Delete sentence with id
router.delete("/:id", (req, res) => {
  res.send(`Deleted the sentence with ${req.params.id}`);
});

export default router;
