const express = require('express');
const router = express.Router();
const { Parent, Child, ChildParent } = require('../models');


//get individual Parent
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const parent = await Parent.findOne({
            where: { id },
            include: {
                model: Child,
                as: "children",
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }
        });
        res.status(200).json(parent);
    } catch (err) {
        console.log(err);
    }
});

//get all Parents
router.get('/', async (req, res) => {
    try {
        const parentList = await Parent.findAll()
        res.status(200).json(parentList);
    } catch (err) {
        console.log(err);
    }
});

//create parent and add to child
router.post('/', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, childId } = req.body;
    try {
        const parentToAdd = { firstName, lastName, email, phoneNumber };
        const parent = await Parent.create(parentToAdd);
        const id = parent.id;
        const child = await Child.findOne({ where: { id: childId } });
        await ChildParent.create({ id, childId });
        child.addParent(parent);

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