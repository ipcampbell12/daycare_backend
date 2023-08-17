const express = require('express');
const router = express.Router();
const { Parents } = require('../models');

//get individual parents
router.get('/:id', async (req, res) => {
    try {
        const parent = await Parents.findByPk(req.params.id);
        res.status(200).json(parent);
    } catch (err) {
        console.log(err);
    }
});

//get all parents
router.get('/', async (req, res) => {
    try {
        const parentList = await Parents.findAll()
        res.status(200).json(parentList);
    } catch (err) {
        console.log(err);
    }
});

//create parent
router.post('/', async (req, res) => {

    try {
        const parent = req.body;

        await Parents.create(parent);

        res.send(parent);
    } catch (err) {
        console.log(err);
    }

});

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