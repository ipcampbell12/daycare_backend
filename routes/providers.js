const express = require('express');
const providerRouter = express.Router();
const queries = require('../baseQueries');

const table = 'providers';

const columns = [
    'first_name',
    'last_name',
    'username',
    'password'
]

providerRouter.post(('/'), (req, res) => {

    const provider = {
        first: req.body.first_name,
        last: req.body.last_name,
        username: req.body.username,
        password: req.body.password
    };

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

providerRouter.get(('/:id'), (req, res) => {
    try {
        queries.selectRow(table, 'id', req.params.id, res);
    } catch (err) {
        console.log(err.message)
    }
});

providerRouter.delete(('/:id'), (req, res) => {
    try {
        queries.deleteRow(req.params.id, table, 'id', res);
    } catch (err) {
        console.log(err.message)
    }
});

providerRouter.put(('/:id'), (req, res) => {

    const provider = {
        first: req.body.first_name,
        last: req.body.last_name,
        username: req.body.username,
        password: req.body.password
    }

    const updateArr = [

    ];

    try {
        queries.updateRow(table, 'id', req.params.id, res);
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = providerRouter;