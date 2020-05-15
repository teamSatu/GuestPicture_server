const router = require('express').Router()
const RoomController = require('../controllers/roomController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizations')

router.use(authentication)
router.get('/', authorization, RoomController.findOne)
router.post('/', RoomController.create)
router.delete('/', authorization, RoomController.delete)
router.get('/question', (req, res, next) => {
  res.status(200).json(require('../resources.json'))
})

module.exports = router