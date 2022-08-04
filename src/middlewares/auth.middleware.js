const { sign, verify } = require("../lib/jwt.lib")
const { response } = require("../server")


const auth = (request, response, next) => {

  try {
    const authorization = request.headers.authorization
    // Quitando Bearer
    const token = authorization.replace("Bearer ", "")
  
    console.log("estaaaamos en el middelware")
    console.log("token en el middleware", token)
  
    const isVerified = verify(token)
    console.log("isVerified", isVerified)
    
    next() // puedes continuar
  }catch(err){
    response.status(401)
    response.json({
      success:false,
      message: err.message
    })
  }

}

module.exports = { auth }

