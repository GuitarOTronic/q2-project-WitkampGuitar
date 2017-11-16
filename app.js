const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan');

app.use(require('cors')())
app.disable('x-powered by')
app.use(bodyParser.json())

const router = require('./routes/router')

app.use('/notes', router)



const listener = console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app
