const mongoose = require('mongoose');

// schema for users
const UsersSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: [true, 'Please enter username']
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'Please enter email']
    },
    usertype:{
        type: String,
        trim: true,
        required: [true, 'Mention user type']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Please enter password']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UsersSchema)