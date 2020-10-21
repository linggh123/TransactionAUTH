'use strict'

const hyperid = require('hyperid')
const instance = hyperid()

const id = instance() //untuk membuat sebuah id random

console.log(id)
console.log(instance())