import mongoose from "mongoose"

export const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    
    comment: {
        type: String,
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
    })