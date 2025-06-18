import mongoose from "mongoose";

export const AddOnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  image: {
    type: String,
    required: true,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },
});
