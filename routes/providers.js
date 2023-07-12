const express = require('express');
const router = express.Router();
const queries = require('../baseQueries');


router.post(('/'), (req, res) => {

    const provider = {
        first: req.body.first_name,
        last: req.body.last_name,
        username: req.body.username,
        password: req.body.password
    }

    const columns = [
        'first_name',
        'last_name',
        'username',
        'password'
    ]

    try {
        queries.createRow(provider, res, 'providers', columns)
    } catch (err) {
        console.log(err.message)
    };
});

module.exports = router;