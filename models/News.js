const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    userid:{
        type: Number,
        required: [true, 'Please add id']
    },
    title:{
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    imagelink:{
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    adminapproved:{
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    postedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('News', NewsSchema)