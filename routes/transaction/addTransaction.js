const express = require('express')
const db = require('../../controller/dbController')
const auth = require('../../middleware/authenticationMiddleware')
const app = express.Router()

app.post('/transactions', auth, (req, res) => {
    let body = {}
    for (let key in req.body) {
        body[key] = req.body[key]
        if (key == "date") {
            body[key] = new Date(req.body[key]).toDateString()
            if (body[key] == "Invalid Date") return res.status(400).send("Please input the right date format (YYYY-MM-DD)")
        }
        if (key == "nominal") {
            body[key] = Number(req.body[key])
            if (typeof body[key] == NaN || !body[key]) return res.status(400).send("Please input the right nominal transaction")
        }
        if (key == "fromPhone") {
            body[key] = req.body[key]
            if (body[key] == "") return res.status(400).send("Please input the right phone number")
        }
        if (key == "toPhone") {
            body[key] = req.body[key]
            if (body[key] == "") return res.status(400).send("Please input the right phone number destination")
        }
        if (key == "id") {
            body[key] = Number(req.body[key])
            if (typeof body[key] == NaN || !body[key]) return res.status(400).send("Please input the right ID")
        }
    }

    const { id } = req.body
    console.log(body)
    const isIdAvailable = db.get('transactions', id)
    if (!isIdAvailable) {
        res.status(409).send('This ID has been registered.')
    } else {
        db.add('transactions', body)
        res.send(body)
    }
})

module.exports = app