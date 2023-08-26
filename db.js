// getting-started.js
const mongoose = require('mongoose');
// const mongoURI="mongodb://127.0.0.1:27017/pizza?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI="mongodb+srv://adityaswaadimithu:Oq9TPxh0AuaVDJsO@cluster0.mrtkqty.mongodb.net/?retryWrites=true&w=majority"
 
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
      console.log("Welcome to mongodb");
    })
}

module.exports=connectToMongo; 
