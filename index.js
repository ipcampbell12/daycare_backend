const express = require('express');
const morgan = require('morgan');
const providers = require("./routes/providers");
const children = require('./routes/children');
const visits = require("./routes/visits");

const app = express()

app.use(express.json());
app.use(morgan('tiny'))

app.use('/api/providers', providers.providerRouter)
app.use('/api/providers', children)
app.use('/api/providers', visits.visitsRouter)

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

