const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

function Authentication (req, res, next) {
  const {token} = req.headers;
  // if(!token){
  //   return next(err)
  // }
  console.log('Ga ada token')

  try {
    let decode = verifyToken(token)
    let {id} = decode
    User
      .findByPk(id)
      .then(user => {
        if(user) {
          req.currentRoomUser = user.idRoom
          next()
        } else {
          console.log("User Not Found")
          // return next(err)
        }
      })
  } catch (error) {
    console.log(error)
    // return next(err)
  }
}

module.exports = Authentication