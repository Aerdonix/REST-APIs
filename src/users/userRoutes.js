const { Router } = require('express');
const {createUser, readUser, updateUser, deleteUser} = require('./userController');
const userRouter = Router();

userRouter.post("/creator", createUser );
userRouter.get("/readUser", readUser);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;