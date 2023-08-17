const express = require('express');
const router = express.Router();
const { Providers } = require('../models');

//get all providers
router.get('/', async (req, res) => {
    try {
        const providerList = await Providers.findAll();
        res.send(providerList);
    } catch (err) {
        console.log(err);
    }

});

//get provider by id
router.get('/:id', async (req, res) => {
    try {
        const provider = await Providers.findByPk(req.params.id);
        res.status(200).json(provider);
    } catch (err) {
        console.log(err);
    }
});


//get provider by firstName
router.get('/:firstName', async (req, res) => {
    try {
        const provider = await Providers.findAll({
            where: { firstName: req.body.firstName }
        });

        res.send(provider);
    } catch (err) {
        console.log(err);
    }
});


//create provider
router.post('/', async (req, res) => {

    try {
        const provider = req.body;

        await Providers.create(provider);

        res.send(provider);
    } catch (err) {
        console.log(err);
    }

});


module.exports = router;