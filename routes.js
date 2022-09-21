const express = require('express');
const router = express.Router();
const db = require("./db")

router.get('/', (req, res) => {
    // get all the users from the database
    let result = db.query(`SELECT * FROM users`);
    return res.json(result.row);
})