const express = require('express');
const router = express.Router();
const { Invoice } = require('../models');

router.post('/', async (req, res) => {
    try {
        const invoice = req.body;
        await Invoice.create(invoice);

        return res.send(invoice);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {

    try {
        const invoices = await Invoice.findAll();

        return res.send(invoices);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})



module.exports = router;