
const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authentication = require('../middleware/authenticationMiddleware')

app.use(authentication)

app.delete("/transaction", (req, res) => {
    const query = req.query;
    const id = query.id;
    db.remove("transaction", id)
    res.status(202).send("Delete Accepted!")
    return;
});
console.log(body)

module.exports = app