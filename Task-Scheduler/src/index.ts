import express = require("express")
import dotenv = require("dotenv")
import router from "./routes"
dotenv.config()

const app = express()
app.use(router)
app.listen(process.env.PORT, () => {
	console.log(`Server Start : PORT : ${process.env.PORT}`)
})