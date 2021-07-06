import mongoose, { Schema } from "mongoose";

interface Sentence {
  source: String;
  eng: String;
  jap: String;
  date: Date;
}

const sentenceSchema = new Schema({
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

export default mongoose.model<Sentence>("Sentence", sentenceSchema);
