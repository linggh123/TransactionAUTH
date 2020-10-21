const express = require('express')
const bodyParser = require('body-parser')

const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addStoreRoute = require('./routes/stores/addStore')
const getStoreRoute = require('./routes/stores/getStore')
const addInventoryRoute = require('./routes/inventory/addInventory')
const getInventoryRoute = require('./routes/inventory/getInventory')
const addGoodsRoute = require('./routes/goods/addGoods')
const getGoodsRoute = require('./routes/goods/getGoods')
const addTransactionRoute = require('./routes/transaction/addTransaction')
const getTransactionRoute = require('./routes/transaction/getTransaction')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(registerRoute)
app.use(loginRoute)

app.use(addStoreRoute)
app.use(getStoreRoute)
app.use(addInventoryRoute)
app.use(getInventoryRoute)
app.use(addGoodsRoute)
app.use(getGoodsRoute)
app.use(addTransactionRoute)
app.use(getTransactionRoute)

const port = 3011
app.listen(port, () => {
    console.log(`Backend app is running in http://localhost:${port}`);
})