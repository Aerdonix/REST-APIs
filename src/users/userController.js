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

exports.readUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({users: users})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(
            {username: req.body.username},
            {[req.body.key]: req.body.value}
        )
        res.status(200).send({message: "A user has been updated"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({username: req.body.username})
        res.status(200).send({message: "A user successfully deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}