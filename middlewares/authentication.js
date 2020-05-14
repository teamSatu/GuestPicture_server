const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

function Authentication (req, res, next) {
  const {token} = req.headers;
  if(!token){
    return next({
      name : 'JsonWebTokenError',
      errors: [{message: "Please login first"}]
    })
  }

  try {
    let decode = verifyToken(token)
    let {id} = decode
    User
      .findByPk(id)
      .then(user => {
        if(user) {
          req.currentRoomUser = user.idRoom
          req.currentUser = user.id
          next()
        } else {
            return next({
              name : 'Not Found',
              errors: [{message: "User not found"}]
            }) 
        }
      })
      .catch(err => {
        return next({
            name : 'Unauthorized',
            errors: [{message: "User not authorized"}]
        })
    })
  } catch (error) {
      return next({
        name : 'JsonWebTokenError',
        errors: [{message: "Please login first"}]
      })
  }
}

module.exports = Authentication