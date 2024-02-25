import express = require("express")
import dotenv = require("dotenv")
import bodyParser = require("body-parser")

import routes from "./routes"

// init .env file
dotenv.config()

// init express app
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/person", routes)
app.listen(process.env.PORT, () => {
    console.log(`Server Up on PORT : ${process.env.PORT}`)
})
