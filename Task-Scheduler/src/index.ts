import express = require("express")
import bodyParser = require("body-parser")
import router from "./routes"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)
app.listen(3000, () => {
	console.log(`Server Start : PORT : ${3000}`)
})
