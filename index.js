const express = require('express');
const morgan = require('morgan');
const db = require("./models");

const app = express()

//what's this for?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))

//routers
const providerRouter = require('./routes/Providers');
app.use("/providers", providerRouter);

const childrenRouter = require('./routes/Children');
app.use("/children", childrenRouter);

const ParentsRouter = require('./routes/Parents');
app.use("/parents", ParentsRouter);

const PaymentRouter = require('./routes/Payments');
app.use("/payments", PaymentRouter);

const VisitRouter = require('./routes/Visits');
app.use("/visits", VisitRouter);

const InvoiceRouter = require('./routes/Invoices');
app.use("/invoices", InvoiceRouter);


const port = process.env.PORT || 3003;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
});


