import mongoose from "mongoose";

// VARIANT SCHEMA
export const VariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
