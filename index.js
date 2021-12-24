const express = require("express");
require("./db/connection");
const Student = require("./model/students");
const app = express();
const port = 3000;

app.use(express.json());
// express.json is an inbuilt method in express to recognize the incoming..
// request object as a json object.

// for registration of new student we will use http post method

app.post('/students' , (req , res) =>{
    // we filled the student data in json format in postman body
    // we are registering new students using post method i.e sending data to server
    // to get the data from the server we need to req to the server
    console.log(req.body);
    console.log("user registration is successful");
    // our student data is in user now , Student is a collection name 
    const user = new Student(req.body)
    // to save data in user database
    // and this data we are getting from the server is returning promise
    user.save().then( () =>{
        res.send(user);
    }).catch( (error) => {
        res.send(error);
    })
})

app.listen(port , ()=>{
    console.log(`app listening at http://localhost:${port}`)
});