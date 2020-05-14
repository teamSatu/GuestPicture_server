const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/login', UserController.login)
router.get('/showPlayer', UserController.showPlayer)
router.patch('/:id', UserController.addScore)
router.delete('/:idRoom', UserController.deletePlayer)

module.exports = router