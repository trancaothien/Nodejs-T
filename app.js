const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const connectDB = require('./src/config/connectDB')
const app = express()
const userRouter = require('./src/routers/userRouter')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect DB
connectDB()

// init userRouter
userRouter(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server is running on port', PORT);
})