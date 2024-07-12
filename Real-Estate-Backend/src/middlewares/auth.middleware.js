import jwt from 'jsonwebtoken';
import { User} from '../models/user.model.js';
import {asyncHandler} from '../utils/AsyncHandler.js';
import {ApiError} from '../utils/ApiError.js';

export const verifyJWT = asyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken  || req.header("Authorization")?.replace("Bearer ","")
        // console.log(token);
        if (!token) {
            throw new ApiError(401,"Unauthorized request")
        }
        const decodedToken =   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken._id).select("-password")

        if (!user) {
            throw new ApiError(401,"invalid token")
        }
        req.user = user
        next()

    } catch (err) {
        throw new ApiError(401,err?.message || "Invalid Access Token")
    }
})