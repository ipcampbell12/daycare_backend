const express = require('express');
const providerRouter = express.Router();
const queries = require('../baseQueries');
const { createArr } = require('../utitlies')

const providerTable = 'providers';

const providersColumns = [
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
        queries.createRow(provider, res, providerTable, providersColumns)
    } catch (err) {
        console.log(err.message)
    };
});


providerRouter.get(('/'), (req, res) => {
    try {
        queries.selectRows(providerTable, res)
    } catch (err) {
        console.log(err.message)
    }
});

providerRouter.get(('/:id'), (req, res) => {
    try {
        queries.selectRow(providerTable, 'id', req.params.id, res);
    } catch (err) {
        console.log(err.message)
    }
});

providerRouter.delete(('/:id'), (req, res) => {
    try {
        queries.deleteRow(req.params.id, providerTable, 'id', res);
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

    const updateArr = createArr(providersColumns, Object.values(provider))

    try {
        queries.updateRow(providerTable, updateArr, 'id', req.params.id, res);
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = {
    providerRouter: providerRouter,
    providerTable: providerTable,
    providersColumns: providersColumns

}
