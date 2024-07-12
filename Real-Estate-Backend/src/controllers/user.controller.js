import {User} from '../models/user.model.js';
import {asyncHandler} from '../utils/AsyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import mongoose from 'mongoose';

const generateToken = async(userId) =>{

    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()

        return accessToken
    } catch (err) {
        throw new ApiError(500,"Something went wrong to generate access Token")
    }
    
}

const signin = asyncHandler(async(req,res)=>{
    const {username, email,mobile_no, password} = req.body

    if (!(username&&email&&password)) {
        throw new ApiError(400,"All Fields are require")
    }

    const existUser = await User.findOne({
        username,
        email
    })

    if (existUser) {
        throw new ApiError(401, "Already exist","Existed Account")
    }

    const user = await User.create({
        username,email,password,mobile_no
    })


    const createdUser = await User.findById(user._id).select("-password")

    if (!user) {
        throw new ApiError(500,"Something went wrong to create user")
    }


    res.status(200).json(new ApiResponse(200,{createdUser},"User created Successfully"))
})

const login = asyncHandler(async (req,res)=>{
    const {username, email, password} = req.body

    if (!(username&&email&&password)) {
        throw new ApiError(400,"All Fields are require")
    }

    const user = await User.findOne({username,email})

    if (!user) {
        throw new ApiError(401,"Please enter correct details of user")
    }

    const isCorrectPsw = await user.checkPsw(password)

    if (!isCorrectPsw) {
        throw new ApiError(401,"Please enter correct password")
    }

    const token = await generateToken(user._id)
    const loggedInUser = await User.findById(user._id).select("-password")
    const options = {
        httpOnly: true,
        secure: true
    }

    res.status(200)
        .cookie("accessToken", token)
        .json(new ApiResponse(200, {loggedInUser, token,options}, "Logged in"))

})

const logout = asyncHandler(async(req,res)=>{
    const options = {
        httpOnly: true,
        secure: true
    }

    res.status(200)
        .clearCookie("accessToken",options)
        .json(new ApiResponse(200, {},"Log out"))
})

const updateUserDetails = asyncHandler(async(req,res)=>{
    const {username} = req.body

    if (!username) {
        throw new ApiError(400,"Please enter username")
    }

    const updateUser = await User.findOneAndUpdate(req.user._id,
        {
            $set:{username}
        },
        {new: true}
        ).select("-password")

    res.status(200)
        .json(new ApiResponse(200,updateUser,"Successfully update username"))

})

const getHistory = asyncHandler(async(req,res)=>{
    const history = await User.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup:{
                from: "properties",    // here get error if mongodb convert "propertys"
                localField:"history",
                foreignField:"_id",
                as:"history",
                pipeline:[
                    {
                        $lookup:{
                            from: "users",
                            localField:"owner",
                            foreignField:"_id",
                            as:"owner",
                            pipeline:[
                                {
                                    $project:{
                                        username:1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields:{
                            $first: "$owner"
                        }
                    }
                ]
            }
        }
    ])
    res.status(200)
        .json(new ApiResponse(200, history, "History fetch Successfully"))
})

const getUser = asyncHandler(async(req,res)=>{
    if (!req.user) {
        throw new ApiError(401, "Unknown user")
    }
    res.status(200).json(new ApiResponse(200, req.user, "User data"))
})

const userProperties = asyncHandler(async(req,res)=>{
    const properties = await User.aggregate([
        {
            $match:{
                _id: req.user._id
            }
        },
        {
            $lookup:{
                from: "properties",
                localField: "_id",
                foreignField: "owner",
                as: "yourProperty"
            }
        }
    ])

    if (!properties) {
        throw new ApiError(400, "Error at user property fetch")
    }
    res.status(200)
        .json(new ApiResponse(200, properties, "User Property fetch Successfully"))

})

export {signin, login,logout,updateUserDetails,getUser,getHistory,userProperties}