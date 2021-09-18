const express = require('express')
const router = express.Router()
const createNewUser = require('../controllers/userController')

let userRouter = (app) => {

    router.get('/', (req, res) => { res.send('server is running') })
    router.post('/createNewUser', createNewUser.createNewUser)

    return app.use("/", router)
}

module.exports = userRouter