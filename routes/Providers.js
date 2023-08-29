const express = require('express');
const router = express.Router();
const { Provider, Child, Visit } = require('../models');
const { generatePerson } = require('../utilities/faker');




//get all Providers
router.get('/', async (req, res) => {
    try {
        const providerList = await Provider.findAll({
            include: {
                model:
                    Child,
                as: "children",
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'providerId']
                },
                include: {
                    model: Visit,
                    as: 'visits',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'providerId', 'childId', 'paymentId', 'invoiceId']
                    }

                }
            }
        });
        res.send(providerList);
    } catch (err) {
        console.log(err);
    }

});

//get provider by id
router.get('/:id', async (req, res) => {
    try {
        const provider = await Provider.findByPk(req.params.id, {
            include: {
                model: Child,
                as: "children",
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'providerId']
                },
                include: {
                    model: Visit,
                    as: 'visits',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'providerId', 'childId', 'paymentId', 'invoiceId']
                    }

                }
            }
        });
        res.status(200).json(provider);
    } catch (err) {
        console.log(err);
    }
});

//get chidlren by provider
router.get('/:id/Child', async (req, res) => {
    try {
        const providerId = req.params.providerId;
        const Child = await Child.findAll({
            where: {
                providerId: providerId
            }
        });
        res.json(Child);
    } catch (err) {
        console.log(err);
    }

});

//get provider by firstName
router.get('/:firstName', async (req, res) => {
    try {
        const provider = await Provider.findAll({
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
        //const provider = req.body;
        const fakeProvider = generatePerson('Provider');
        await Provider.create(fakeProvider);

        res.send(fakeProvider);
    } catch (err) {
        console.log(err);
    }

});

router.put("/:id", async (req, res) => {
    try {
        await Provider.update({
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
        await Provider.destroy({
            where: { id: req.params.id }
        });

        res.send(`Provider with id ${req.params.id} has been deleted`);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;