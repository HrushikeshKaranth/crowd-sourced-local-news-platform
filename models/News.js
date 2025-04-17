const mongoose = require('mongoose');

// schema for news 
const NewsSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: [true, 'Please add username']
    },
    userid:{
        type: String,
        trim: true,
        required: [true, 'Please add id']
    },
    title:{
        type: String,
        trim: true,
        required: [true, 'Please add title']
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Please add desc']
    },
    imagelink:{
        type: String,
        trim: true,
        required: [true, 'Please add image link']
    },
    adminapproved:{
        type: String,
        trim: true,
        required: [true, 'Please confirm']
    },
    postedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('News', NewsSchema)