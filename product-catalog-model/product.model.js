import mongoose from "mongoose";
import { VariantSchema } from "./variant.model";
import { CategorySchema } from "./category.model";

// PRODUCT SCHEMA
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    categories: [{ type: CategorySchema }],

    brandName: { type: String, required: true },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },

    variants: [
      {
        type: VariantSchema,
      },
    ],

    ratingSummary: {
      totalReviews: {
        type: Number,
        default: 0,
      },
      averageRating: {
        type: Number,
        default: 0,
      },
    },

    reviews: [{ type: ReviewSchema, default: [] }], // only top N Reviews for quick read
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
