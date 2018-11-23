// importing top level fuctions of express
const express = require("express");
const app = express(); // create an express app
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./modules/helper/config");
const errorhandler = require("./modules/helper/errorhandler");
const routerhelper = require("./route/index");

// connecting with dataBase
mongoose.connect(config.db);

// testing the connection
let database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error'));
database.once('open', () => {
    console.log("mongoose server connected!!!!");
});

// parse request of content type application/json
app.use(bodyParser.json());

// parse request of content type application
app.use(bodyParser.urlencoded({ extended: true}));
routerhelper.init(app);
app.use(errorhandler);
//app.use('/api/', router);
//app.use('/apis/', router);

// listening to the port 
app.listen(4141, 'localhost', () => {
    console.log("server is responding!!!!");
});