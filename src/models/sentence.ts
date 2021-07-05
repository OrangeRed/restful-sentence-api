import mongoose from "mongoose";

const sentenceSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  eng: {
    type: String,
    required: true,
  },
  jap: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
