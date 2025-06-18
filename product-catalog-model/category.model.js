import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    parentName: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    _id: false, // Prevents the creation of an _id field for subdocuments
    timestamps: true,
  }
);

export const Category = mongoose.model("Category", CategorySchema);
