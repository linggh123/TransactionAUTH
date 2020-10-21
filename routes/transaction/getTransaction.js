const express = require('express')
const db = require('../../controller/dbController')
const auth = require('../../middleware/authenticationMiddleware')
const app = express.Router()


app.get('/transactions', (req, res) => {
    const body = req.body
    const id = parseInt(req.query.id)

    const result = db.get('transactions')
    const isIdAvailable = db.get('transactions', id)
    if (id == 0) {
        res.send(result)
    } else if (id == NaN || !id) {
        res.status(404).send("Please provide a correct ID")
    } else if (isIdAvailable) {
        res.send(db.get('transactions', id))
    } else {
        res.status(404).send("Please provide a correct ID!")
    }
})

module.exports = app