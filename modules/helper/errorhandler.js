//var error = require("./error_model");
function errorhandler(err, req, res, next){

    if(typeof (err) === "string"){
        return res.status(400).json({message: err});
    }

    if(err.name === "ValidationError"){
        return res.status(400).json({ message: err.message});
    }

    if(err.name === "UnauthorizedError"){
        return res.status(401).json({message: 'invalid token'});
    }

    return res.status(500).json({message: err.message});

}

module.exports = errorhandler;
