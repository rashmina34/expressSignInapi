const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defining schema
const schema = new Schema({
    username: {
         type: String,
         required: true
         },
    password:{
         type: String,
         required: true
        },
    email: {
         type: String,
         required: true
        },
    firstName: {
         type: String,
         required: true
         },
    lastName: {
         type: String,
         required: true 
        },
    createdDate: { 
        type: Date,
        default: Date.now
         },
    updatedDate: {
         type: Date,
         default: Date.now
        },
    deletedDate: { 
        type: Boolean,
        default: false
        }
});

// set the schema to the JSON object
//schema.set('toJSON', { virtuals: true });

// export the whole module
module.exports = mongoose.model('User', schema);