const { json } = require('express');
const Users = require('../models/Users')
const News = require('../models/News')

// @desc User login
// @route POST /api/v1/login
// @access Public
exports.loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body; // request body

        const userExists = await Users.find({ "username": username }) // checking if username exists in database

        if (userExists[0] == null) { // if username doesn't exist in database
            return res.status(400).json({
                success: false,
                error: 'Username doesnot exists 😢!'
            })
        }
        else if (userExists[0].password != password) { // username exists but password is wrong
            return res.status(400).json({
                success: false,
                error: 'Wrong password 😢!'
            })
        }
        else {
            return res.status(200).json({ // success message
                success: true,
                data: userExists[0]
            })
        }
        // error handling
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}

// @desc Register User
// @route POST /api/v1/
// @access Public
exports.registerUser = async (req, res, next) => {
    try {
        const { username, email, password, usertype } = req.body; // req body

        // checking if same username exists
        const userExists = await Users.find({ "username": username })

        // if same username exists
        if (userExists[0] != null) {
            return res.status(400).json({
                success: false,
                error: 'Username already exists 😢!'
            })
        }

        // checking if same email exists
        const emailExists = await Users.find({ "email": email })

        // if same email exists
        if (emailExists[0] != null) {
            return res.status(400).json({
                success: false,
                error: 'Email already exists 😢!'
            })
        }

        // register user [save user details to database]
        const user = await Users.create(req.body);

        // returning success message
        return res.status(201).json({
            success: true,
            data: user
        });
        // error handling
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}


// @desc Upload News
// @route POST /api/v1/news
// @access Public
exports.uploadNews = async (req, res, next) => {
    try {
        const { username, userid, title, description, imagelink, adminapproved } = req.body;

        // checking if news title already exists in database
        const newsExists = await News.find({ "title": title })

        // if news title already exists
        if (newsExists[0] != null) {
            return res.status(400).json({
                success: false,
                error: 'News title already exists 😢!'
            })
        }

        // save news in database
        const news = await News.create(req.body);

        // return success message
        return res.status(201).json({
            success: true,
            data: news
        });
        // error handling
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}

// @desc Get News
// @route get /api/v1/news
// @access Public
exports.getNews = async (req, res, next) => {
    try {

        // retrieving news from database
        const news = await News.find()

        // returning retrieved news 
        return res.status(200).json({
            success: true,
            count: news.length,
            data: news
        });
        // error handling
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}