require('dotenv').config()
const mongoose = require("mongoose")
const server = require("./src/server")

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/${DB_NAME}`

mongoose.connect(URL)
.then(() => {
  console.log("Conectados ..")

  server.listen(8080, (request, response) => {
    console.log("Nuestro servidor esta encendido")
  })
  
})
.catch((err) => {
  console.log("Erorr: ", err)
})
