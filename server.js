const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

//config .env file
dotenv.config({path: './config/config.env'})

//connect to database
connectDB();

//import routes
const routes = require('./routes/routes');

//use express
const app = express();

app.use(express.json());

//using morgan for logs
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//default root url
app.use('/api/v1/', routes)

//use build for production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

//config port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));


