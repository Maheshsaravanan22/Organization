

const mongoose = require("mongoose")

const AdduserSchema = new mongoose.Schema({

    userid: Number,
    name: String,
    password: String,
    email: String,
    contact: String,
    address:String,
    location:String,
    department: String,
    title: String,
    reporting: String,
    role : {
        type : String,
        default : "User"
    }

   
}
);

module.exports = mongoose.model("Adduser",AdduserSchema);