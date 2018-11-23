var express = require("express");
var router = express.Router();
var log = require("./controllerLogIn");

router.post("/login", log.login);
module.exports = router;