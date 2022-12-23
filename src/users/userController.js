const { response } = require('express');
const User = require('./userModel');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).send({newUser: "User successfully created."})
        console.log(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}