const express = require('express');
const router = express.Router();
const { Child } = require('../models');
const { generatePerson } = require('../utilities/faker');


//get individual child by id
router.get('/:id', async (req, res) => {
    try {
        const child = await Child.findByPk(req.params.id);
        res.status(200).json(child);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "somethign went wrong, fool" });
    }
});


//get child by first name (not working)
router.get('/:firstName', async (req, res) => {
    try {
        const child = await Child.findAll({
            where: { firstName: req.params.firstName }
        });

        res.send(child);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "somethign went wrong, fool" });
    }
});


//create child
router.post('/', async (req, res) => {

    try {
        // const child = req.body;

        const { providerId } = req.body;
        const fakeChild = generatePerson('Child');
        const child = { ...fakeChild, ...providerId }
        await Child.create(child);

        res.send(child);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "somethign went wrong, fool" });
    }

});


//update child
router.put("/:id", async (req, res) => {
    try {

        const child = await Child.update({
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
        return res.status(500).json({ error: "somethign went wrong, fool" });
    }
});

//delete child
router.delete('/:id', async (req, res) => {
    try {
        await Child.destroy({
            where: { id: req.params.id }
        });

        res.send(`Child with id ${req.params.id} has been deleted`);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "somethign went wrong, fool" });
    }
})

module.exports = router;