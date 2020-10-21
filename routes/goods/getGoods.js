const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../../middleware/authenticationMiddleware')

app.use(authentication)

app.get('/goods', (req, res) => {
    const result = db.get('goods', req.query)
    res.send(result)
})


module.exports = app