const router = require('express').Router()
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizations')

router.post('/login', UserController.login)
router.get('/showPlayer', UserController.showPlayer)
router.use(authentication)
router.patch('/getroom', UserController.getRoom)
router.patch('/joinroom', authorization, UserController.joinRoom)
router.patch('/score/:id', UserController.addScore)
router.patch('/room/:id', UserController.getRoom)
router.delete('/', UserController.deletePlayer)

module.exports = router