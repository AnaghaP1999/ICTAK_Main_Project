const express = require('express');
const router = express.Router();



const requirementData=require("../model/schema")

router.use(express.json());
router.use(express.urlencoded({extended:true}));


router.get('/requirementlist', (req, res) => {
    requirementData.find()
      .then((Requirements) => {
        res.json(Requirements);
      })
      .catch((error) => {
        console.error('Error retrieving Requirements:', error);
        res.status(500).send('Error retrieving Requirements');
      });
  });

router.post('/addrequirement',async (req,res)=>{                              
    try{
        //console.log(req.headers.authorization)
        console.log(req.body);
        const item = req.body;                                               
        const newdata = await requirementData(item);                               
        newdata.save();                                
        res.status(200).json("POST Successful");    
        console.log(` POST data`);                                                                         
    }catch(error){
        res.status(400).json("Cannot /POST data");                            
        console.log(`Cannot POST data`);                                      
    }
})



router.get('/viewdata/:_id',async (req,res)=>{
  try {
      let id = req.params._id;
      console.log(id)
      let data = await requirementData.findById(id);
      res.json({data:data,status:200}).status(201);
  } catch (error) {
      res.status(400).json({ message: "GET request CANNOT be completed" });    
  }
})













module.exports = router