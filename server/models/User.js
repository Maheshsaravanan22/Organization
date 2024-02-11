const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : String,
    username : String,
    password : String,
    role : String
})

const UserModel = mongoose.model("user",UserSchema);
module.exports = UserModel