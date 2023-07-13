const express = require('express');
const childrenRouter = express.Router();
const queries = require('../baseQueries');
const { createArr } = require('../utitlies')
const { providerTable, providersColumns } = require('./providers');
const baseQueries = require('../baseQueries');

const childrenTable = 'children';

const childrenColumns = [
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
    const id1 = childrenTable.concat('.', childrenColumns[3]);
    const id2 = providerTable.concat('.', 'id');
    const c1 = `children.${childrenColumns[0]}, children.${childrenColumns[1]}, children.${childrenColumns[2]},`;
    const c2 = 'providers.id AS provider_id';

    try {
        queries.selectJoin(childrenTable, providerTable, c1, c2, id1, id2, req.params.provider_id, res)
    } catch (err) {
        console.log(err.message)
    }
});

childrenRouter.get(('/:provider_id/children/:id'), (req, res) => {
    const id1 = childrenTable.concat('.', childrenColumns[3]);
    const id2 = providerTable.concat('.', 'id');

    const c1 = `children.${childrenColumns[0]}, children.${childrenColumns[1]}, children.${childrenColumns[2]},`;
    const c2 = `providers.id AS provider_id`

    try {
        queries.selectJoin(childrenTable, providerTable, c1, c2, id1, id2, req.params.provider_id, res, req.params.id);
    } catch (err) {
        console.log(err.message)
    }
});


childrenRouter.delete(('/:provider_id/children/:id'), (req, res) => {
    console.log('This route has run')
    try {
        baseQueries.deleteRow(req.params.id, childrenTable, 'id', res)
    } catch (err) {
        console.log(err.message)
    };
});

childrenRouter.put(('/:provider_id/children/:id'), (req, res) => {

    const child = {
        first: req.body.first_name,
        last: req.body.last_name,
        birthdate: req.body.birthdate,
        provider_id: req.params.provider_id
    }

    const updateArr = createArr(childrenColumns, Object.values(child));

    try {
        baseQueries.updateRow(childrenTable, updateArr, 'id', req.params.id, res)
    } catch (err) {
        console.log(err.message)
    }
});


module.exports = childrenRouter;
