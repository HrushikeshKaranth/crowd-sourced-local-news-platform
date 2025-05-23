const express = require('express');
const router = express.Router();

// importing functions from controller
const {
    registerUser,
    loginUser,
    uploadNews,
    getNews,
    deleteNews
} = require('../controllers/controllers')

// mapping routes and controller functions
router
    .route('/register')
    .post(registerUser)

router
    .route('/login')
    .post(loginUser)

router
    .route('/news')
    .post(uploadNews)
    .get(getNews)
    
router
    .route('/news/:id')
    .delete(deleteNews)

module.exports = router;
