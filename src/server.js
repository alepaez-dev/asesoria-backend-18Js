const express = require("express")
const cors = require("cors")
const routerUsers = require("./routes/user.route")

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())
app.use("/users",routerUsers)
app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, Bienvenido a nuestra API de asesoria JWT"
  })
})

module.exports = app;

