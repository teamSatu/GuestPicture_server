const {Room} = require('../models')

function Authorization(req, res, next){
  Room
    .findByPk(id)
    .then(room => {
      if(idRoom === req.currentRoomUser){
        next()
      } else {
        console.log("you are not in this room, enter roomId first")
        // return next(err)
      }
    })
    .catch(err => {
      console.log("ada error authorization")
    })
}

module.exports = Authorization