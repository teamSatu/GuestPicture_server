const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/login', UserController.login)
router.get('/showPlayer', UserController.showPlayer)
router.patch('/score/:id', UserController.addScore)
router.patch('/room/:id', UserController.getRoom)
router.delete('/', UserController.deletePlayer)

module.exports = router