const express = require('express');
const morgan = require('morgan');
const db = require("./models");


const app = express()

app.use(express.json());
app.use(morgan('tiny'))



const port = process.env.PORT || 3003;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
});


