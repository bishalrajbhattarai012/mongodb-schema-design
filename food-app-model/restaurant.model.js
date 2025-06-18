import mongoose from "mongoose";
import { RestaurantCategory } from "./restaurant.category.model";
import { MenuItemSchema } from "./menu.item.model";

export const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantCategoryName: { type: String, required: true },
  restaurantCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RestaurantCategory",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  ratingSummary: {
    totalReviews: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
  },
  menuItems: [{ type: MenuItemSchema }],
  reviews: [{ type: ReviewSchema }], // for top N reviews

  images: [{ type: String }],
});
