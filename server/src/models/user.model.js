import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const phoneSchema = mongoose.Schema({
    countryCode: { type: Number, required: false },
    phone: { type: Number, required: false },
    mobile: { type: Number, required: false },
});

const addressTempSchema = mongoose.Schema({
    address1: { type: String, required: false },
    address2: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false },
    postalCode: { type: Number, required: false },
});

const addressPermenentSchema = mongoose.Schema({
    address1: { type: String, required: false },
    address2: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false },
    postalCode: { type: Number, required: false },
});


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "password is required"],
        unique: true 
    },
    password: {
        type: String,
        required: [true, "password is required"] 
    },
    email: {
        type: String,
        required: [true, "password is required"] ,
        unique: true 
    },
    tempAddress: addressTempSchema,
    permenentAddress: addressPermenentSchema,
    contact: phoneSchema,
    position: {
        type: String,
        required: [true, "Position is required"] 
    },
    refreshToken : {
        type: String
    }
},
{ timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})



userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export default mongoose.model("User", userSchema);
