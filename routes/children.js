const express = require('express');
const childrenRouter = express.Router();
const queries = require('../baseQueries');
const { createArr } = require('../utitlies')
const { providerTable } = require('./providers')

const childrenTable = 'children';

const columns = [
    'first_name',
    'last_name',
    'date_of_birth',
    'provider_id'
];

childrenRouter.post(('/:provider_id/children'), (req, res) => {

    console.log(req.params.provider_id);

    const child = {
        first: req.body.first_name,
        last: req.body.last_name,
        birthdate: req.body.birthdate,
        provider_id: req.params.provider_id

    };

    try {
        queries.createRow(child, res, childrenTable, columns)


    } catch (err) {
        console.log(err.message)
    };
});


childrenRouter.get(('/:provider_id/children'), (req, res) => {
    const id1 = childrenTable.concat('.', columns[3]);
    const id2 = providerTable.concat('.', 'id')

    try {
        queries.selectJoin(childrenTable, providerTable, id1, id2, req.params.provider_id, res)
    } catch (err) {
        console.log(err.message)
    }
});

childrenRouter.get(('/:provider_id/children/:id'), (req, res) => {
    const id1 = childrenTable.concat('.', columns[3]);
    const id2 = providerTable.concat('.', 'id')

    try {
        queries.selectJoin(childrenTable, providerTable, id1, id2, req.params.provider_id, res, req.params.id);
    } catch (err) {
        console.log(err.message)
    }
});


module.exports = childrenRouter;
