
const router = require("express").Router();
const Adduser = require("../models/Adduser");


router.post("/adduser", async (req, res) => {
    try {
      const highestId = await Adduser.findOne().sort('-userid').exec();
      const newId =highestId ? highestId.userid + 1 : 1;
      const newItem = new Adduser({
        userid: newId,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        location: req.body.location,
        department: req.body.department,
        title: req.body.title,
        reporting: req.body.reporting
      });
    console.log(newItem);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  })

  router.get("/getuserdata",async(req,res)=>{
    try {
        const userdata = await Adduser.find();
        res.status(201).send(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
  })

  router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
  
        const userindividual = await Adduser.findById({_id:id});
        console.log(userindividual);
        res.status(201).send(userindividual)
  
    } catch (error) {
        res.status(422).json(error);
    }
  })

  router.put("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
  
        const updateduser = await Adduser.findByIdAndUpdate(id,req.body,{
            new:true
        });
  
        console.log(updateduser);
        res.status(201).send(updateduser);
  
    } catch (error) {
        res.status(422).json(error);
    }
  })
  
  router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
  
        const deletuser = await Adduser.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).send(deletuser);
  
    } catch (error) {
        res.status(422).json(error);
    }
  })

  router.get('/databyemail/:email', async (req, res) => {
    const query = { email: req.params.email };
    const result = await Adduser.findOne(query);
    res.send(result);
  });

 

  module.exports = router