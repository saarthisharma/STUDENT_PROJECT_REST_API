const mongoose = require("mongoose");
const validator = require("validator");

// we are creating the instance of mongoose schema
const studentSchema = new mongoose.Schema({
    name:{
        type :String,
        required:true,
        maxlength:20 
    },
        email:{
            type:String,
            required:true,
            unique:true,
            // the value will get the email and it will validate
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("invalid email");
                }
            }
        },
        phone_number:{
            type:Number,
            min:10,
            required:true,
            unique:true
        }
});

// we will create a new collection using model
// new collection should be singular in form and first letter should be capital
const Student = new mongoose.model('Student' , studentSchema);

module.exports = Student;