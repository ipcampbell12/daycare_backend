const express = require('express');
const morgan = require('morgan');
const db = require("./models");

//models
const { Parents } = require('./models/Parents');
const { Children } = require('./models/Children');
const { ParentsChildren } = require('./models/ParentsChildren');

const app = express()

app.use(express.json());
app.use(morgan('tiny'))

//routers
const providerRouter = require('./routes/Providers');
app.use("/providers", providerRouter);

const childrenRouter = require('./routes/Children');
app.use("/children", childrenRouter);

//associations
Parents.belongsToMany(Children, { through: ParentsChildren });
Children.belongsToMany(Parents, { through: ParentsChildren })


const port = process.env.PORT || 3003;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
});


