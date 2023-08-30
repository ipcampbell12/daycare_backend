const express = require('express');
const router = express.Router();
const { Payment, Visit, Invoice } = require('../models/payment');

router.post('/', async (req, res) => {
    try {
        const payment = req.body;
        await Payment.create(payment);

        return res.send(payment);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {

    try {
        const payments = await Payment.findAll();

        return res.send(payments);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})


module.exports = router;