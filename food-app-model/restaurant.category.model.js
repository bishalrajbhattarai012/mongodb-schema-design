import mongoose from "mongoose";

const RestaurantCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
});
export const RestaurantCategory = mongoose.model(
  "RestaurantCategory",
  RestaurantCategorySchema
);
