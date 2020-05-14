const { User } = require('../models')

class UserController{
    static login(req, res, next) {
        const { username } = req.body
        const payload = {
            username
        }
        User.create(payload)
        .then(result => {
            let token = result.username
            return res.status(201).json({
                access_token: token,
                msg: 'Welcome to game'
            })

        })
        .catch(err => {
            return next(err)
        })
    }

    static showPlayer(req, res, next){
        let idRoom = req.currentIdRoom
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
                return Task.update(updateScore, {
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
                task: result[1]
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static deletePlayer(req, res, next){
        User.destroy({
            where: {
                idRoom: req.currentIdRoom, 
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "End Game",
            })
        })
        .catch(err => {
            return next(err)
        }) 
    }
}

module.exports = UserController