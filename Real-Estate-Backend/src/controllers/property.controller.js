import {Property} from '../models/property.model.js';
import {asyncHandler} from '../utils/AsyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import mongoose from 'mongoose';
import { uploadOnCloudinary } from '../utils/Cloudinary.js';

const getAllProperty = asyncHandler(async(req,res)=>{

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page-1)*limit;

    const totalProperty = await Property.countDocuments()

    const totalPages = Math.ceil(totalProperty/limit);

    const properties = await Property.find().skip(skip).limit(limit)

    if (!properties) {
        throw new ApiError(400, "Something wentt wrong in fetching properties")
    }

    res.status(200)
        .json(new ApiResponse(200,{
            properties,
            currentPage:page,
            totalPages,
            nextCursor: page < totalPages ? page + 1: null
        }, "Properties fetch successfully"))

})

const getTypeProperty = asyncHandler(async(req,res)=>{
    const {propertyType} = req.params

    const properties = await Property.find({ typo: propertyType })

    if (!properties || properties.length === 0) {
        throw new ApiError(400, "No properties found for the given type");
    }

    res.status(200)
        .json(new ApiResponse("200",properties, "Property by type fetch successfully"))
})

const getPropertyById = asyncHandler(async(req,res)=>{
    const {propertyId} = req.params

    // const property = await Property.findById(propertyId)
    const property = await Property.findById(propertyId).populate('owner', 'username email mobile_no');

    if (!property) {
        throw new ApiError(400, "Something went wrong in fetching property")
    }
    res.status(200)
        .json(new ApiResponse(200,property, "Property fetched successfully"))
})

const addProperty = asyncHandler(async(req,res)=>{

    const { propertyTitle, locality,price1,price2,typo, bedrooms,typeOfProperty,areaSqFt=""} = req.body
    
    const img1LocalPath = req.files?.image1[0]?.path;
    const img2LocalPath = req.files?.image2[0]?.path;
    if (!img1LocalPath || !img2LocalPath) {
        throw new ApiError(400,"Image file is required")
    }
    console.log(req.files.image1[0]);
    const img1 = await uploadOnCloudinary(img1LocalPath)
    const img2 = await uploadOnCloudinary(img2LocalPath)

    if (!img1 || !img2) {
        throw new ApiError(400,"Img file not upload on cloudinary")
    }

    const imagesUp = [img1,img2]
    const imageUrls = imagesUp.map(image => image.secure_url);

    const property = await Property.create({
        propertyTitle,
        price1,
        price2,
        locality,
        typo,
        images: imageUrls,
        bedrooms,
        typeOfProperty,
        areaSqFt,
        owner : req.user._id
    })

    if (!property) {
        throw new ApiError(400, "Something went wrong at upload property")
    }
    res.status(200)
    .json(new ApiResponse(200, property, "Successfully upload property"))
})

const removeProperty = asyncHandler(async(req,res)=>{
    const {propertyId} = req.params

    const property = await Property.findById(propertyId)

    if (property.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(401, "You can't remove property, unauthorize")
    }
    
    const delProperty = await Property.findByIdAndDelete(propertyId)

    if (!delProperty) {
        throw new ApiError(400, "Something went wrong at delete property")
    }
    res.status(200)
    .json(new ApiResponse(200, delProperty, "Successfully delete property"))
})

const filterProperty = asyncHandler(async(req,res)=>{
    const content = req.body.content

    if(!content){
        throw new ApiError(400, "Content is empty in filter property")
    }

    const filterProp = await Property.find({
        $or:[
            {propertyTitle: {$regex: new RegExp(content, 'i')}},
            {locality: {$regex: new RegExp(content, 'i')}},
        ],
    })

    if (!filterProp) {
        throw new ApiError(500, "Something went wrong at filtering")
    }

    res.status(200)
       .json(new ApiResponse(200, filterProp, "Successfully fetch filter property"))

})

export {getAllProperty,getTypeProperty,getPropertyById,addProperty,removeProperty,filterProperty}
