const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    const newAnswer = req.body
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES($1, $2, $3, $4)`
    
    //create values array
    let values = [newAnswer.feeling, newAnswer.understanding, newAnswer.support, newAnswer.comments]

    pool.query(sqlText, values )
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error making database query', error);
        res.sendStatus(500);
    });
});

module.exports = router;