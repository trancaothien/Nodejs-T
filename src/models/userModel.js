const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: "string",
    age: 'Number',
    address: 'string'
})

module.exports = mongoose.model('User', userSchema)