const router = require('express').Router()
const RoomController = require('../controllers/roomController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizations')

router.use(authentication)
router.get('/', authorization, RoomController.findOne)
router.post('/', RoomController.create)
router.delete('/', authorization, RoomController.delete)

module.exports = router