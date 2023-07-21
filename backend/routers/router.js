const express = require('express');
const router = express.Router();



const requirementData=require("../model/schema")

router.use(express.json());
router.use(express.urlencoded({extended:true}));




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











module.exports = router