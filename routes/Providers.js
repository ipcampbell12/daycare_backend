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
            where: { firstName: req.params.firstName }
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

router.put("/:id", async (req, res) => {
    try {
        await Providers.update({
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            username: req.body.username,
            password: req.body.password
        }, {
            where: { id: req.params.id }
        });

        res.send(`Provider with id ${req.params.id} has been updated`);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Providers.destroy({
            where: { id: req.params.id }
        });

        res.send(`Provider with id ${req.params.id} has been deleted`);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;