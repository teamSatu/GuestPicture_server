const router = require('express').Router()
const UserController = require('../controllers/userController')
const Authentication = require('../middlewares/authentication')
const Authorization = require('../middlewares/authorizations')

router.post('/login', UserController.login)
router.get('/showPlayer', UserController.showPlayer)
router.use(Authentication)
router.patch('/getroom', UserController.getRoom)
router.patch('/joinroom', Authorization, UserController.joinRoom)
router.patch('/score/:id', UserController.addScore)
router.patch('/room/:id', UserController.getRoom)
router.delete('/', UserController.deletePlayer)

module.exports = router