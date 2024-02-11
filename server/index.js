const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PORT = 4001;
const app = express();
const bodyParser = require("body-parser");
 const UserModel = require("./models/User")
 const passport = require("passport");


app.use(cors());

const routes = require("./routes/adduser");
const routesadd = require("./routes/Addadmin");

require('dotenv').config({path:'.env'})


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


 
// app.use(bodyParser.json({extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));



app.use('/',routes);
app.use('/',routesadd);


mongoose.connect("mongodb://127.0.0.1:27017/OrganizationDB")
.then(console.log("Connected"))
.catch((err)=>console.log(err));

app.post("/register",(req,res) => {
    const {email, username, password} = req.body;
    bcrypt.hash(password,10)
    .then(hash => {
        UserModel.create({email , username ,password: hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))      
    }).catch(err => res.json(err))
})


app.post("/login",(req,res) => {
    const {email, password} = req.body;
        UserModel.findOne({email : email})
       .then(user => {
        if(user){
             bcrypt.compare(password, user.password, (err,response) => {
               if(response){
                   const token = jwt.sign({email : user.email, role : user.role},
                       "jwt-secret-key", {expiresIn : '1d'})
                       res.cookie('token',token)
                       return res.json({status: "Success", role : user.role})
               }else{
                console.log("The password is incorrect");
                return res.json({status:"incorrect"})
               }
             })
        }else{
            console.log("No record exists");
            return res.json({status:"norecord"});
        }
       })  
})



app.get('/',(req,res)=>{
    res.send('its running')
    })

app.listen(PORT, () => {
		console.log(`Server is running on Port ${PORT}`);
	});
