const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const troutes = require('./routes/troutes');

const app = express();

app.use (cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(troutes)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(3500)
console.log('server on port 3500')