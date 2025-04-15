const { json } = require('express');
const Users = require('../models/Users')
const News = require('../models/News')
// const Transaction = require('../models/Transaction');


// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
// exports.getTransactions = async (req, res, next) => {
//     try {
//         const transactions = await Transaction.find();

//         return res.status(200).json({
//             success: true,
//             count: transactions.length,
//             data: transactions
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             error: 'Server error'
//         });
//     }
// }

// @desc Add transaction
// @route POST /api/v1/transactions
// @access Public
// exports.addTransactions = async (req, res, next) => {
//     try {
//         const { text, amount } = req.body;

//         const transaction = await Transaction.create(req.body);

//         return res.status(201).json({
//             success: true,
//             data: transaction
//         });
//     } catch (error) {
//         if (error.name === 'ValidationError') {
//             const messages = Object.values(error.errors).map(val => val.message);
//             return res.status(400).json({
//                 success: false,
//                 error: messages
//             })
//         }
//         else {
//             return res.status(500).json({
//                 success: false,
//                 error: 'Server error'
//             })
//         }
//         // console.log(error.errors.amount.properties.message);
//     }
// }

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
// exports.deleteTransactions = async (req, res, next) => {
//     try {
//         const transaction = await Transaction.findByIdAndDelete(req.params.id);
//         console.log(transaction);
//         if (!transaction) {
//             return res.status(404).json({
//                 success: false,
//                 error: 'No transaction found'
//             });
//         }
//         else{
//             return res.status(200).json({
//                 success: true,
//                 data: {}
//             })
//         }
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             error: 'Server error'
//         })
//     }
// }


// @desc Test Connection 
// @route TEST /api/v1/transactions/test
// @access Public
exports.runConnectionTest = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            msg: 'Server is Connected!'
        })
    }
    catch{
        return res.status(500).json({
            success:false,
            msg: 'Connection Failed!'
        })
    }
}

// @desc login User
// @route POST /api/v1/login
// @access Public
exports.loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const userExists = await Users.find({ "username": username })
        console.log(userExists);
        
        if(userExists[0] == null){
            return res.status(400).json({
                success: false,
                error: 'Username doesnot exists 😢!'
            })
        }
        else if(userExists[0].password != password){
            return res.status(400).json({
                success: false,
                error: 'Wrong password 😢!'
            })
        }
        else{
            return res.status(200).json({
                success: true,
                data: userExists[0]
            })
        }
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
        const { username, email, password, usertype } = req.body;

        const userExists = await Users.find({ "username": username })
        console.log(userExists);
        
        if(userExists[0] != null){
            return res.status(400).json({
                success: false,
                error: 'Username already exists 😢!'
            })
        }
        const emailExists = await Users.find({ "email": email })
        console.log(emailExists);
        
        if(emailExists[0] != null){
            return res.status(400).json({
                success: false,
                error: 'Email already exists 😢!'
            })
        }
        // const transaction = await Transaction.create(req.body);
        const user = await Users.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
        });
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