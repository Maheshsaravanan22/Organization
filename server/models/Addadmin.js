

const mongoose = require("mongoose")

const AddadminSchema = new mongoose.Schema({

    adminid: Number,
    name: String,
    password: String,
    email: String,
    contact: String,
    address:String,
    location:String,
    department: String,
    title: String,
    role : {
        type : String,
        default : "Admin"
    }

   
}
);

module.exports = mongoose.model("Addadmin",AddadminSchema);