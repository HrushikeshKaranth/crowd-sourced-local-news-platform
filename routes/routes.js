const express = require('express');
const router = express.Router();
// const { 
//     getTransactions, 
//     addTransactions, 
//     deleteTransactions,
//     runConnectionTest
//     } = require('../controllers/transactionController')

// router
//     .route('/')
//     .get(getTransactions)
//     .post(addTransactions);

// router
//     .route('/:id')
//     .delete(deleteTransactions);

// router
//     .route('/test')
//     .get(runConnectionTest);

const {
    registerUser,
    loginUser
} = require('../controllers/controllers')

router
    .route('/register')
    .post(registerUser)

router
    .route('/login')
    .post(loginUser)

module.exports = router;
