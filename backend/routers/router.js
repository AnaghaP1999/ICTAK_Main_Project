const express = require('express');
const router = express.Router();



const requirementData=require("../model/schema")

router.use(express.json());
router.use(express.urlencoded({extended:true}));


// Get All requirement list - Admin
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

//   get a single requirement details - Admin
  router.get('/get-requirement/:id', (req, res) => {
    const id = req.params.id;console.log('idnode', req.params);
  
    requirementData.findById(id)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Error retrieving data' });
      });
  });

  
//   Add requirements - Admin
router.post('/addrequirement',async (req,res)=>{                              
    try{
        //console.log(req.headers.authorization)
        console.log(req.body);
        const item = req.body;                                               
        const newdata = await requirementData(item);                               
        newdata.save();                                
        res.status(200).json("Requirement Added");    
        console.log(` POST data`);                                                                         
    }catch(error){
        res.status(400).json("Cannot /POST data");                            
        console.log(`Cannot POST data`);                                      
    }
})


// Update requirement details - Admin
router.put('/update-requirement/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    requirementData.findByIdAndUpdate(id, updatedData, { new: true })
      .then((updated) => {
        res.json(updated);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Error updating requirement' });
      });
  });


//   delete a requirement - Admin
  router.delete('/delete-requirement/:id', (req, res) => {
    const id = req.params.id;
  
    requirementData.findByIdAndRemove(id)
      .then((removedData) => {
        if (removedData) {
          console.log('Requirement deleted successfully:', removedData);
          res.json({ message: 'Requirement deleted successfully' });
        } else {
          res.status(404).json({ error: 'Requirement not found' });
        }
      })
      .catch((err) => {
        console.error('Error deleting requirement:', err);
        res.status(500).json({ error: 'Error deleting requirement' });
      });
  });








module.exports = router