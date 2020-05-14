const {Room} = require('../models')

function Authorization(req, res, next){
  const {name} = req.body
  console.log(req.body)
  Room
    .findOne({
      where : {
        name
      }
    })
    .then(room => {
      console.log(room)
      if(room){
        next()
      } else {
        return next({
          name : 'Unauthorized',
          errors: [{message: "There is no room exist with that name, please input a valid room name"}]
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