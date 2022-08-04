const jwt = require("jsonwebtoken")

const { JWT_SECRET } = process.env

// Iniciar sesion, creamos token
const sign = (payload = {}) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "12h" })
}

// Verificamos token
const verify = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

module.exports = { sign, verify }