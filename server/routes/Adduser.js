
const router = require("express").Router();
const Adduser = require("../models/Adduser");
const UserModel = require("../models/User")


router.post("/adduser", async (req, res) => {
    try {
      const highestId = await Adduser.findOne().sort('-userid').exec();
      const newId =highestId ? highestId.userid + 1 : 1;
      const newItem = new Adduser({
        userid: newId,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        location: req.body.location,
        department: req.body.department,
        title: req.body.title,
        reporting: req.body.reporting,
        role:req.body.role
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
    } catch (error) {
        res.status(422).json(error);
    }
  })


  router.get("/getuser/:id",async(req,res)=>{
    try {

        const {id} = req.params;
  
        const userindividual = await Adduser.findById({_id:id});
        console.log(userindividual);
        res.status(201).send(userindividual)
  
    } catch (error) {
        res.status(422).json(error);
    }
  })

  
  router.get('/records/:email', async (req, res) => {
    const { email } = req.params;
    console.log(email);

    try {
        // Find the user by password (not recommended for actual use)
        const user = await UserModel.findOne({ email });
        console.log(email,"password is ")
        console.log("userdetails",user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Fetch records associated with the found user
        const records = await Adduser.find({ email: email });
         console.log("records",records);
        res.json(records);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.put('/updateuser/:id', async (req, res) => {
  const { id } = req.params;
  const { userdata } = req.body; // Assuming newData is the updated data

  try {
      // Find the record by ID and update it
      const updatedRecord = await Adduser.findByIdAndUpdate(id, userdata, { new: true });

      if (!updatedRecord) {
          return res.status(404).json({ message: 'Record not found' });
      }

      res.json(updatedRecord);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
});
  
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
 

  module.exports = router