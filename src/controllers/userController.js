const express = require('express')
const User = require('../models/userModel')

let createNewUser = (req, res) => {
    const userModel = new User({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    })
    userModel.save((err, sc) => {
        console.log(sc);
    })

    res.status(200).json({
        message: "success",
        userModel: userModel
    })
}

module.exports = {
    createNewUser: createNewUser
}