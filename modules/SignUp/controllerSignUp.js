// importing the require modules
const note = require("./model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const errorname = require("./../../errorHandler/error_route");
const SALT_VA1 = 10; // define how many cycles needed for decryption

mongoose.Promise = Promise;

exports.register = (req, res, next) => {
    console.log("error => ", req.body);
    
       note.findOne({ username: req.body.username}).then((username) =>{
        if(username){
            console.log("error", username);
            res.status(409).send({message : "username already exist!! conflict"});
        } 
      else{
          // hashing the password 
            bcrypt.hash(req.body.password, SALT_VA1, (err, hash) => {
                note.create({
                    username: req.body.username,
                    password: hash,
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    createdDate: req.body.createdDate,
                    updatedDate: req.body.updatedDate,
                    deletedDate: req.body.deletedDate
               })
               .then((data) => {
                    res.status(200).json({ message: "successfully created!!!" });
               })
               .catch((err => next(err))
           
             )} 
        )}    
    });
       
}

