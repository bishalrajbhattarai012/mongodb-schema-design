import mongoose from "mongoose";

// VARIANT SCHEMA
export const AmountSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    discountPercent: {
      type: Number,
      required: false,
    },
    discountedAmount: {
      type: Number,
      required: false,
    },
    currency: {
      type: String,
      required: true,
      default: "USD",
    },
  },
  { _id: false }
);

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
    amount: AmountSchema,
    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
