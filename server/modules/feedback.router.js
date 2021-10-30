const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    const newAnswer = req.body
    const sqlText = 'INSERT INTO prime_feedback VALUES $(1, $2, $3, $4)'

    pool.query(sqlText, [newAnswer])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    });
});

module.exports = router;