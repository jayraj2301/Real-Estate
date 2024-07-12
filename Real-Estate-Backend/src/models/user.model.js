import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile_no:{
        type: String,
        required: true
    },
    history:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
    }],
    profilePicture: {
        type: String
    },
    // wishList:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Wishlist",
    // }
},{timestamps:true})

userSchema.pre("save", async function (next) { 
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password,10)
    next()
 })

userSchema.methods.checkPsw = async function(password){
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = async function () { 
    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
 }

export const User = mongoose.model("User", userSchema)