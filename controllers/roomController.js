const { Room } = require('../models')
const { User } = require('../models')

class RoomController {
    static create(req, res, next) {
        const { name } = req.body
        const payload = {
            name
        }
        Room.create(payload)
        .then(result => {
            return res.status(201).json({
                result,
                msg: 'Success create new room'
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static delete(req, res, next) {
        Room.destroy({
            where: {
                id : req.currentRoomUser
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "End Room Game",
            })
        })
        .catch(err => {
            return next(err)
        })
    }
    static findOne(req, res, next){
      const id = req.currentRoomUser
      Room
        .findByPk(id, {
          include: User
        })
        .then(room => {
          res.status(200).json({
            Room: room
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
}

module.exports = RoomController