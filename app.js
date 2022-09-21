const express = require('express');
const app = express();
const ExpressError = require('./expressError');

// convert the data into the json format
app.use(express.json());

// const uRoutes = require('./routes/users');
const uRoutes = require('./routes');

app.use('/users', uRoutes); // all routes will now start with /users. See users.js file for the users route

// 404 erorr handler

app.use(function (req, res, next){
    const err = new ExpressError("Not Found", 404);
    // parse the erorr
    return next(err);
});

// general error
app.use(function (err, req, res, next){
    // default erorr is 500 internal server error
    let status = err.status || 500;
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    })
})