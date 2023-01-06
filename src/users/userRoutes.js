const { Router } = require('express')
const {createUser, loginUser, readUser, updateUser, deleteUser} = require('./userController')
const { hashPass, comparePass, tokenCheck } = require("../middleware")

const userRouter = Router()

userRouter.post("/createUser",hashPass, createUser )
userRouter.post("/login", comparePass, loginUser)
userRouter.get("/readUser", readUser)
userRouter.get("/authCheck", tokenCheck, loginUser)
userRouter.put("/updateUser", updateUser)
userRouter.delete("/deleteUser", deleteUser)

module.exports = userRouter;