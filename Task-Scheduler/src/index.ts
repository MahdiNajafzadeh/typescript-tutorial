import express = require("express")
import dotenv = require("dotenv")
import routes from "./router.js"
dotenv.config()

const app = express()

routes.forEach((route) => {
	app.use(route)
})

app.listen(process.env.PORT, () => {
	console.log(`Server Start : PORT : ${process.env.PORT}`)
})
