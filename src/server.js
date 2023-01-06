require('./db/connection');
const cors = require('cors')
const express = require('express')
const userRouter = require('./users/userRoutes')

const app = express()
app.use(cors())
const port = process.env.PORT || 5001
app.use(express.json())
app.use(userRouter)
app.get("/health", (req, res) => {
    res.status(200).send({message:"API Connected and Working"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

