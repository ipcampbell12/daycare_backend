const express = require('express');
const visitsRouter = express.Router();
const queries = require('../baseQueries');
const { createArr } = require('../utitlies')
const { providerTable } = require('./providers');

const visitsTable = 'visits';

const visitsColumns = [
    'visit_date',
    'visit_cost',
    'paid_for',
    'provider_id'
];

visitsRouter.post(('/:provider_id/visits'), (req, res) => {

    const visit = {
        visit_date: req.params.date,

    }
});

module.exports = {
    visitsRouter: visitsRouter
}