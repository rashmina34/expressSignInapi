//importing required modules
const mongoose = require("mongoose");
const model = require("./../SignUp/model");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const config = require("./../helper/config");
//const errorHandler = require("./../../errorHandler/error_controller");

mongoose.Promise = Promise;

exports.login = (req, res, next) => {

    //retrieving the the data by checking whether the entered username is present in DB or not
    model.findOne({ username: req.body.username }).exec()
        .then((data) => {
            if (!data) {;
                return res.status(404).send({message:"Not Found"});
            } else {
                
                //comparing the login password and stored password
                bcrypt.compare(req.body.password, data.password, (err, result) => {
                    if (result == true) {
                        res.status(200).json({message:"welcome"});
                    } else {
                        //return errorHandler;
                        res.status(500).json({message:'Authentication failed'});
                    }
                })
            }

        
        const display = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            _id: data._id
        };
        var token = JWT.sign({ id: model._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          res.status(200).send({ auth: true, display, token: token });
        });
};
