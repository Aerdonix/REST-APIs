const { Router } = require('express');
const {createUser} = require('./userController');
const userRouter = Router();

userRouter.post("/creator", createUser );

module.exports = userRouter;