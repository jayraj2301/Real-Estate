import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
    property:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps})

export const Wishlist = mongoose.model("Wishlist", wishlistSchema)