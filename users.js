const express = require("express");
const { nextTick } = require("process");
const router = express.Router();
const db = require("./db");

// router.get('/', (req, res) => {
     // get all users from the database
//     let result = db.query(`SELECT * FROM users`);
//     return res.json(result.row);
// })


// use Async Await in above method so that you can get data
// router.get('/', async (req, res) => {
//     // get all users from the database
//     let result = await db.query(`SELECT * FROM users`);
//     // return res.json(result); OR 
//     return res.json(result.rows);
// })

// Error handling. Eg database table does not exist

// router.get('/', async (req, res, next) => {
//     // get all users from the database
//     try{
//         let result = await db.query(`SELECT * FROM userskjflajdflkajdflasd`);
//         // return res.json(result); OR 
//         return res.json(result.rows);
//     } catch(e){
//         return next(e)
//     }
// })

// with query string

// router.get('/search', async (req, res, next) => {
//     try{
//         const { type } = req.query;
//         const result = await db.query(`SELECT * FROM users WHERE type='${type}'`)
//         return res.json(result.rows)

//     }catch(e){
//         return next(e)
//     }
// })


//  Parameterized queries to avoid sql attack in the above code

router.get('/search', async (req, res, next) => {
    try{
        const { type } = req.query;
        // const result = await db.query(`SELECT * FROM users WHERE type='${type}'`)
        const result = await db.query(`SELECT * FROM users WHERE type=$1`, [type])
        return res.json(result.rows)

    }catch(e){
        return next(e)
    }
})

module.exports = router;
