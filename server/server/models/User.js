const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
    },
    accountType : {
        type : String,
        enum : ["Admin", "Seller", "Customer"],
        trim : true,
    },
    additionalDetails : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Profile",
    },
    properties : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Property"
        }
    ],
    subscriptionExpires : {
        type: Date,
        default : Date.now() - 6000,
    },
    image : {
        type : String,
        required : true,
    },
    resetPasswordExpires: {
        type: Date,
    },
    token : {
        type : String,
    }
})

module.exports = mongoose.model("User", userSchema);