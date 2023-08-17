const express = require('express');
const router = express.Router();
const { Children } = require('../models');

//get chidlren by provider
router.get('/:providerId', async (req, res) => {
    try {
        const providerId = req.params.providerId;
        const children = await Children.findAll({
            where: {
                providerId: providerId
            }
        });
        res.json(children);
    } catch (err) {
        console.log(err);
    }

});

//get individual child by id
router.get('/:id', async (req, res) => {
    try {
        const child = await Children.findByPk(req.params.id);
        res.status(200).json(child);
    } catch (err) {
        console.log(err);
    }
});


//get child by first name
router.get('/:firstName', async (req, res) => {
    try {
        const child = await Children.findAll({
            where: { firstName: req.params.firstName }
        });

        res.send(child);
    } catch (err) {
        console.log(err);
    }
});


//create child
router.post('/', async (req, res) => {

    try {
        const child = req.body;

        await Children.create(child);

        res.send(child);
    } catch (err) {
        console.log(err);
    }

});

//add child to parent 
router.post('/parents/:parentId/children/:childId', async (req, res) => {
    try {

    } catch (err) {

    }
});

//update child
router.put("/:id", async (req, res) => {
    try {

        const child = await Children.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            ProviderId: req.body.ProviderId
        }, {
            where: { id: req.params.id }
        });

        res.json(child);

    } catch (err) {
        console.log(err);
    }
});

//delete child
router.delete('/:id', async (req, res) => {
    try {
        await Children.destroy({
            where: { id: req.params.id }
        });

        res.send(`Child with id ${req.params.id} has been deleted`);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;