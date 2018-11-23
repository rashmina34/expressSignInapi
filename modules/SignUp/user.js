var express = require("express");
var router = express.Router();
const signin = require("./controllerSignUp");

router.post("/signup", signin.register);
module.exports = router;