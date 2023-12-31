const express = require('express');
const router = express.Router();
const { Visit } = require('../models');

router.post('/', async (req, res) => {
    try {

        const visit = req.body;
        await Visit.create(visit);

        return res.send(visit);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//pay for visit
router.put('/:id/pay', async (req, res) => {
    try {

        const visit = await Visit.update({
            paidFor: true
        }, {
            where: { id: req.params.id }
        })

        return res.send(`Visit with id of ${req.params.id} was paid for`);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//get ALL visits
router.get('/', async (req, res) => {

    try {
        const visits = await Visit.findAll();

        return res.send(visits);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//get ALL visits BY CHILD
router.get('/children/:id', async (req, res) => {

    try {
        const visits = await Visit.findAll({
            where: {
                childId: req.params.id
            }
        });

        return res.send(visits);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//get ALL visits BY PROVIDER
router.get('/providers/:id', async (req, res) => {

    try {
        const visits = await Visit.findAll({
            where: {
                providerId: req.params.id
            }
        });

        return res.send(visits);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});


//get UNPAID visits BY PROVIDER 
router.get('/providers/:id/unpaid', async (req, res) => {

    try {
        const visits = await Visit.findAll({
            where: {
                providerId: req.params.id,
                paidFor: false
            }
        });

        return res.send(visits);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//get PAID visits BY PROVIDER 
router.get('/providers/:id/paid', async (req, res) => {

    try {
        const visits = await Visit.findAll({
            where: {
                providerId: req.params.id,
                paidFor: true
            }
        });

        return res.send(visits);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});


module.exports = router;


//learning: don't need to import the specific file, just the whole folder for models