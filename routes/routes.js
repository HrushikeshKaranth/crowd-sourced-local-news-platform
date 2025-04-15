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
    registerUser
} = require('../controllers/controllers')

router
    .route('/register')
    .post(registerUser)


module.exports = router;
