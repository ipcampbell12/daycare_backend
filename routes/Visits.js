const express = require('express');
const router = express.Router();
const { Visit } = require('../models/visit');

router.post('/', async (req, res) => {
    try {
        const visit = req.body;
        await Visit.create(visit);

        return res.send(visit);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {

    try {
        const visits = await Visit.findAll();

        return res.send(visits);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})


module.exports = router;