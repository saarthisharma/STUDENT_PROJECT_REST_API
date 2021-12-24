// const mongoose = require("mongoose");  

// // to connect our express app with mongodb database
// // this connect method is returning promise 
// mongoose.connect(" mongodb://127.0.0.1:27017/student-API" ,{
//    useCreateIndex:true,
//    useNewUrlParser:true,
//    useUnifiedTopology:true
// }).then( () =>{
//     console.log("connection is established")
// }).catch( () =>{
//     console.log("no connection");
// });

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student-API',
  {
    useNewUrlParser: true,
    // useUnifiedTopology: true
  }
).then(()=>console.log("success"))
.catch((error)=>console.log(error));

