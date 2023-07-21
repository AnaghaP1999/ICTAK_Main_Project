const mongoose = require('mongoose');
const Schema = mongoose.Schema({                                              
    name:{
        type:String,                                                         
     
    },
    area:{
        type:String,                                                          
      
    },
    institute:{
        type:String,                                                          
     
    },
    requirement:{                                                                  
        type:String,

    },
    hours:{                                                                  
        type:String,
      
    },
    approved:{                                                                  
        type:Number,
      
    },
  
});

const documentData = mongoose.model('requirement',Schema);
module.exports = documentData;