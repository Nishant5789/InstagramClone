const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        Username: {
            type: String,
            required: [true, " Please add your name. "],
        },
        /*Gender: {
            type: String,
            required: [true, " Please add mention your Gender. "]
        },
        Bio: {
            type: String,

        },
        DoB: {
            type: timestamp,
            required: [true, " Please add your birthdate. "]
        },
        AccType: {
            type: String,
            required: [true, "Please define your account type. "]
        },
        currentStatus: {
            type: String,
            
        },
        currentStatusType: {
            type: String,
        },*/
        email: {
            type: String,
            required: [true, " Please add your email. "]
        },
        password: {
            type: String,
            required: [true, " Please add your password. "]
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("User", userSchema)