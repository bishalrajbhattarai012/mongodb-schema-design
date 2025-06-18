import mongoose from "mongoose";
import { AddOnSchema } from "./add.on.model";

export const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  categoryName: { type: String, required: true },
  categoryId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "category",
  },

  amount: {
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    discountedPrice: { type: Number },
  },

  image: {
    type: String,
    required: true,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },
  restaurantId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },

  addOns: [{ type: AddOnSchema }],
});
