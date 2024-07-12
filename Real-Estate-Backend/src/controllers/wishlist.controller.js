import {Wishlist} from '../models/wishlist.model.js';
import {asyncHandler} from '../utils/AsyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import { isValidObjectId } from 'mongoose';

const getWishList = asyncHandler(async (req,res)=>{
    const wishList = await Wishlist.find({
        user: {$in: ["req.user._id"]}
    })
    if (!wishList) {
        throw new ApiError(400, "Not found wishlist")
    }

    res.status(200)
        .json(new ApiResponse(200, wishList, "Wishlist fetch Successfully"))
})

const addToWishList = asyncHandler(async(req,res)=>{
    const propertyId = req.params.propertyId

    if (!isValidObjectId(propertyId)) {
        throw new ApiError(400, "Property is not valid")
    }

    const makeWishList = await Wishlist.create({
        property: propertyId,
        user: req.user._id
    })

    res.status(200)
        .json(new ApiResponse(200, makeWishList, "Wishlist create Successfully"))
})

const removeFromWishList = asyncHandler(async(req,res)=>{
    const { wishListId} = req.params

    if (!isValidObjectId(propertyId) || !isValidObjectId(wishListId)) {
        throw new ApiError(400, "Property or wishlist is not valid")
    }

    const makeWishList = await Wishlist.findByIdAndDelete(wishListId)

    res.status(200)
        .json(new ApiResponse(200, makeWishList, "Wishlist remove Successfully"))
})

export {getWishList,addToWishList,removeFromWishList}