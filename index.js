const express = require('express');
const morgan = require('morgan');
const providers = require("./routes/providers")

const app = express()

app.use(express.json());
app.use(morgan('tiny'))

app.use('/api/providers', providers)

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

