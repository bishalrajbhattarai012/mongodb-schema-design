import mongoose from "mongoose";

// BRAND SCHEMA
export const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Brand = mongoose.model("Brand", BrandSchema);
