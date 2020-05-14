const {Room} = require('../models')

function Authorization(req, res, next){
  Room
    .findByPk(id)
    .then(room => {
      if(idRoom === req.currentRoomUser){
        next()
      } else {
        return next({
          name : 'Unauthorized',
          errors: [{message: "You are not in this room, enter roomId first"}]
        })
      }
    })
    .catch(err => {
      return next({
        name : 'Internal Server Error',
        errors: [{message: err}]
      })
    })
}

module.exports = Authorization