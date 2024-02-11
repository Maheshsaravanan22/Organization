
const router = require("express").Router();
const Addadmin = require("../models/Addadmin");


router.post("/addadmin", async (req, res) => {
    try {
      const highestId = await Addadmin.findOne().sort('-adminid').exec();
      const newId =highestId ? highestId.adminid + 1 : 1;
      const newItem = new Addadmin({
        adminid: newId,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        location: req.body.location,
        department: req.body.department,
        title: req.body.title,
      });
    console.log(newItem);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  })

  router.get("/getadmindata",async(req,res)=>{
    try {
        const admindata = await Addadmin.find();
        res.status(201).send(admindata)
    } catch (error) {
        res.status(422).json(error);
    }
  })

  router.get("/getadmin/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
  
        const userindividual = await Addadmin.findById({_id:id});
        console.log(userindividual);
        res.status(201).send(userindividual)
  
    } catch (error) {
        res.status(422).json(error);
    }
  })

  router.put("/updateadmin/:id",async(req,res)=>{
    try {
        const {id} = req.params;
  
        const updateduser = await Addadmin.findByIdAndUpdate(id,req.body,{
            new:true
        });
  
        console.log(updateduser);
        res.status(201).send(updateduser);
  
    } catch (error) {
        res.status(422).json(error);
    }
  })
  
  router.delete("/deleteadmin/:id",async(req,res)=>{
    try {
        const {id} = req.params;
  
        const deleteadmin = await Addadmin.findByIdAndDelete({_id:id})
        console.log(deleteadmin);
        res.status(201).send(deleteadmin);
  
    } catch (error) {
        res.status(422).json(error);
    }
  })

 

  module.exports = router