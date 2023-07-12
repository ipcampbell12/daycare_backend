const express = require('express');
const providerRouter = express.Router();
const queries = require('../baseQueries');

const table = 'providers';

providerRouter.post(('/'), (req, res) => {

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
        queries.createRow(provider, res, table, columns)
    } catch (err) {
        console.log(err.message)
    };
});


providerRouter.get(('/'), (req, res) => {
    try {
        queries.selectRows(table, res)
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = providerRouter;