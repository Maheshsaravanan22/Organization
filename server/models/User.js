const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : String,
    username : String,
    password : String,
    role : {
        type : String,
        default : "Admin"
    }
})

const UserModel = mongoose.model("user",UserSchema);
module.exports = UserModel