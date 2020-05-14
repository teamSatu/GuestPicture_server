const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static login(req, res, next) {
        const { username } = req.body
        const payload = {
            username
        }
        User.create(payload)
        .then(result => {
            let user = {
                id: result.id,
                username: result.username
            }
            let token = generateToken(user)
            console.log(token);
            return res.status(201).json({
                token,
                msg: 'Welcome to game'
            })
        })
        .catch(err => {
            console.log(err);
            
            return next(err)
        })
    }

    static getRoom(req, res, next) {
        let id = req.params.id
        User.findByPk(id)
        .then(User => {
            if(User){
                let newRoom = req.body.room
                let updateRoom = {
                    idRoom: newRoom
                }
                return User.update(updateRoom, {
                    where: {
                        id
                    },
                    returning: true
                })
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "You joining the room",
                user: result.dataValues
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static showPlayer(req, res, next){
        let idRoom = req.currentRoomUser
        User.findAll({
            where: {
                idRoom
            },
            order: [['score', 'DESC']]
        })
        .then(result => {
            return res.status(200).json({
                result
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static addScore(req, res, next){
        let id = req.params.id
        User.findByPk(id)
        .then(User => {
            if(User){
                let newScore = User.score + 10
                let updateScore = {
                    score: newScore
                }
                return User.update(updateScore, {
                    where: {
                        id
                    },
                    returning: true
                })
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "You hit the right answer",
                user: result.dataValues
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static deletePlayer(req, res, next){
        User.destroy({
            where: {
                idRoom : req.currentRoomUser
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "End Game",
            })
        })
        .catch(err => {
            console.log(err);
            return next(err)
        }) 
    }
}

module.exports = UserController