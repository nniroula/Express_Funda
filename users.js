const express = require("express");
const router = express.Router();
const db = require("./db");

// router.get('/', (req, res) => {
     // get all users from the database
//     let result = db.query(`SELECT * FROM users`);
//     return res.json(result.row);
// })


// use Async Await in above method so that you can get data
router.get('/', async (req, res) => {
    // get all users from the database
    let result = await db.query(`SELECT * FROM users`);
    // return res.json(result); OR 
    return res.json(result.rows);
})


module.exports = router;
