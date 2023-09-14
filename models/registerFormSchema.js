const mongoose = require("mongoose");
var registerSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobileNumber : {
        type : String,
        required : true,
        unique: true,
    },
    password : String,
})
module.exports = mongoose.model('Register', registerSchema);