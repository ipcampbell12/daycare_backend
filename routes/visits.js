const express = require('express');
const visitsRouter = express.Router();
const queries = require('../baseQueries');
const { createArr } = require('../utitlies')
const providers = require('./providers');
const children = require('./children');

const visitsTable = 'visits';

const visitsColumns = [
    'visit_date',
    'visit_cost',
    'paid_for',
    'child_id',
    'provider_id'
];

visitsRouter.post(('/:provider_id/children/:child_id/visits'), (req, res) => {

    const visit = {
        date: req.body.visit_date,
        cost: req.body.visit_cost,
        paid: req.body.paid_for,
        child_id: req.params.child_id,
        provider_id: req.params.provider_id,
    };

    try {
        queries.createRow(visit, res, visitsTable, visitsColumns)
    } catch (err) {
        console.log(err.message)
    };
});

module.exports = {
    visitsRouter: visitsRouter
}