const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://username:password@cluster0.qlazmk7.mongodb.net/?retryWrites=true&w=majority')

.then(()=>{
    console.log(`Connection to Database established`);
})
.catch((error)=>{
    console.log(`Error in connecting to database ${error.message}`)
})