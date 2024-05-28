const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    
});

const userSchema = mongoose.model('users', newSchema);

module.exports = userSchema;