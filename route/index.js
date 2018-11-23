var express = require("express");
//var router = express.Router();
var signIn = require("./../modules/SignUp/user");
var logIn = require("./../modules/LogIn/userRoute");
//var error = require("./../errorHandler/error_route");

exports.init = (router) => { 
router.use(signIn);
router.use(logIn);
//router.use(error);
}