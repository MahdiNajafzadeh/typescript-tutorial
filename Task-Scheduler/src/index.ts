import express = require("express")
import dotenv = require("dotenv")
import bodyParser = require("body-parser")
import router from "./routes"

dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router)
app.listen(process.env.PORT, () => {
	console.log(`Server Start : PORT : ${process.env.PORT}`)
})
